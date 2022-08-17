import cl from 'classnames'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'

import GenreSearchList from '@/components/layout/Header/Search/GenreSearchList'
import MoviesSearchList from '@/components/layout/Header/Search/MoviesSearchList'

import SearchInput from '@/ui/Input/SearchInput'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/GenreSevice'
import { MovieService } from '@/services/MovieService'

import styles from './Search.module.scss'


const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [dropdownVisible, setDropdownVisible] = useState(false)
	const searchInnerRef = useRef<any>()
	const searchInputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		document.addEventListener('click', (event: any) => {
			const path = event.path || (event.composedPath && event.composedPath())
			if (path.includes(searchInnerRef.current)) {
				setDropdownVisible(true)
				searchInputRef.current?.focus()
			} else {
				setDropdownVisible(false)
				setSearchTerm('')
			}
		})
	}, [])

	const debounceTerm = useDebounce(searchTerm, 500)

	const { data: moviesData, isSuccess: moviesSuccess } = useQuery(
		['search movies', debounceTerm],
		() => MovieService.getAllMovies(debounceTerm),

		{
			select: ({ data }) => data,
			enabled: !!debounceTerm,
		}
	)
	const { data: genresData, isSuccess: genresSuccess } = useQuery(
		['search genres', debounceTerm],
		() => GenreService.getGenres(debounceTerm),

		{
			select: ({ data }) => data,
			enabled: !!debounceTerm,
		}
	)
	const isSuccess = genresSuccess && moviesSuccess

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return (
		<div
			className={cl({ [styles.grow]: dropdownVisible }, styles.search__block)}
			ref={searchInnerRef}
		>
			<SearchInput
				ref={searchInputRef}
				value={searchTerm}
				onChange={handleSearch}
			/>
			{isSuccess && searchTerm && (
				<div className={styles.list__box}>
					{genresData!.length === 0 && moviesData!.length === 0 ? (
						<>
							<p>Ничего не найдено, попробуйте еще раз ;)</p>
						</>
					) : (
						<>
							<GenreSearchList genres={genresData || []} />
							<MoviesSearchList movies={moviesData || []} />
						</>
					)}
				</div>
			)}
		</div>
	)
}

export default Search

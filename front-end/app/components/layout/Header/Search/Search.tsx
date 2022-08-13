import { ChangeEvent, FC, useState } from 'react'
import { useQuery } from 'react-query'

import SearchList from '@/components/layout/Header/Search/SearchList'

import SearchInput from '@/ui/Input/SearchInput'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/GenreSevice'
import { MovieService } from '@/services/MovieService'

import styles from './Search.module.scss'


const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const debounceTerm = useDebounce(searchTerm, 500)

	const { data, isSuccess } = useQuery(
		['search movies', debounceTerm],
		() => MovieService.getAllMovies(debounceTerm),

		{
			select: ({ data }) => data,
			enabled: !!debounceTerm,
		}
	)

	const testFunc = async () => {
		const p1 = MovieService.getAllMovies(debounceTerm)
		const p2 = GenreService.getGenres(debounceTerm)
		return Promise.all([p1, p2])
	}

	const onBlur = () => {
		setSearchTerm('')
	}

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return (
		<div className={styles.search__block}>
			<SearchInput onBlur={onBlur} value={searchTerm} onChange={handleSearch} />
			{isSuccess && searchTerm && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search

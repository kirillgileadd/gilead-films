import cl from 'classnames'
import {
	ChangeEvent,
	FC,
	memo,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'

import GenreSearchList from '@/components/layout/Header/Search/GenreSearchList'
import MoviesSearchList from '@/components/layout/Header/Search/MoviesSearchList'
import { useSearch } from '@/components/layout/Header/Search/useSearch'

import SearchInput from '@/ui/Input/SearchInput'

import { useDebounce } from '@/hooks/useDebounce'

import styles from './Search.module.scss'


const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [dropdownVisible, setDropdownVisible] = useState(false)
	const searchInnerRef = useRef<any>()
	const searchInputRef = useRef<HTMLInputElement>(null)
	const debounceTerm = useDebounce(searchTerm, 500)
	const { searchGenresQuery, searchMoviesQuery, isSuccess } =
		useSearch(debounceTerm)

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

	const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}, [])

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
					{searchGenresQuery.data!.length === 0 &&
					searchMoviesQuery.data!.length === 0 ? (
						<>
							<p>Ничего не найдено, попробуйте еще раз ;)</p>
						</>
					) : (
						<>
							<GenreSearchList genres={searchGenresQuery.data || []} />
							<MoviesSearchList movies={searchMoviesQuery.data || []} />
						</>
					)}
				</div>
			)}
		</div>
	)
}

export default memo(Search)

import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/GenreSevice'
import { MovieService } from '@/services/MovieService'


export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const debounceTerm = useDebounce(searchTerm, 500)

	const testFunc = async () => {
		const p1 = MovieService.getAllMovies(debounceTerm)
		const p2 = GenreService.getGenres(debounceTerm)
		return Promise.all([p1, p2])
	}

	const searchQuery = useQuery(
		['search movies', debounceTerm],
		() => MovieService.getAllMovies(debounceTerm),

		{
			select: ({ data }) => data,
			enabled: !!debounceTerm,
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { searchTerm, handleSearch, searchQuery }
}

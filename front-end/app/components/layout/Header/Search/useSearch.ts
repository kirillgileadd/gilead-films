import { useQuery } from 'react-query'

import { GenreService } from '@/services/GenreSevice'
import MovieService from '@/services/MovieService'


export const useSearch = (debounceTerm: string) => {
	const searchMoviesQuery = useQuery(
		['search movies', debounceTerm],
		() => MovieService.getAllMovies(debounceTerm),

		{
			select: ({ data }) => data,
			enabled: !!debounceTerm,
		}
	)
	const searchGenresQuery = useQuery(
		['search genres', debounceTerm],
		() => GenreService.getGenres(debounceTerm),

		{
			select: ({ data }) => data,
			enabled: !!debounceTerm,
		}
	)
	const isSuccess = searchGenresQuery.isSuccess && searchMoviesQuery.isSuccess

	return { searchMoviesQuery, searchGenresQuery, isSuccess }
}

import { useQuery } from 'react-query'

import { GenreService } from '@/services/GenreSevice'

import { getGenresUrl } from '@/configs/api.config'

import { IGenreItem } from './genres.interface'


export const useGenre = () => {
	const genresData = useQuery('genres', () => GenreService.getGenres(), {
		select: ({ data }) =>
			data.map(
				(genre) =>
					({
						...genre,
						slug: getGenresUrl(genre.slug),
					} as IGenreItem)
			),
	})

	return genresData
}

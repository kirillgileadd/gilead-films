import { useQuery } from 'react-query'

import { GenreService } from '@/services/GenreSevice'

import { getGenreUrl } from '@/configs/url.config'

import { IGenreItem } from './genres.interface'


export const useGenre = () => {
	const genresData = useQuery('genres', () => GenreService.getGenres(), {
		select: ({ data }) =>
			data.map(
				(genre) =>
					({
						...genre,
						slug: getGenreUrl(genre.slug),
					} as IGenreItem)
			),
	})

	return genresData
}

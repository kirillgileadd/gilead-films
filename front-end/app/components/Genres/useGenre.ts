import { useQuery } from 'react-query'

import { GenreService } from '@/services/GenreSevice'

import { getGenreUrl } from '../../api/url.config'

import { IGenreItem } from './genres.interface'


export const useGenre = () => {
	const genresData = useQuery('genres', () => GenreService.getGenres(), {
		select: ({ data }) =>
			data.map(
				(genre) =>
					({
						id: genre._id,
						title: genre.name,
						description: genre.description,
						icon: genre.icon,
						link: getGenreUrl(genre.slug),
					} as IGenreItem)
			),
	})

	return genresData
}

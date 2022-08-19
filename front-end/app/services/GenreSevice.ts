import { IGenreItem } from '@/components/Genres/genres.interface'

import { $api } from '@/utils/api/api.interceptors'

import { getGenresUrl } from '@/configs/api.config'


export const GenreService = {
	async getGenres(searchTerm?: string) {
		return await $api.get<IGenreItem[]>(getGenresUrl(''), {
			params: {
				...(searchTerm ? { searchTerm: searchTerm } : {}),
			},
		})
	},
}

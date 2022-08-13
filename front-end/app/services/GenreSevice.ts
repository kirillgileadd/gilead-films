import { IGenreItem } from '@/components/Genres/genres.interface'

import { getGenresUrl } from '@/configs/api.config'

import { axiosClassic } from '../api/api.interceptors'


export const GenreService = {
	async getGenres(searchTerm?: string) {
		return await axiosClassic.get<IGenreItem[]>(getGenresUrl(''), {
			params: {
				...(searchTerm ? { searchTerm: searchTerm } : {}),
			},
		})
	},
}

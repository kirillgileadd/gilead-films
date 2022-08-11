import { getGenresUrl } from '../api/api.config'
import { axiosClassic } from '../api/api.interceptors'
import { IFetchGenreItem } from '../components/Genres/genres.interface'

export const GenreService = {
	async getGenres(searchTerm?: string) {
		return await axiosClassic.get<IFetchGenreItem[]>(getGenresUrl(''), {
			params: {
				...(searchTerm ? { searchTerm: searchTerm } : {}),
			},
		})
	},
}

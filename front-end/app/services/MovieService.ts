import { IMovie } from '@/shared/types/movie.types'

import { getMoviesUrl } from '@/configs/api.config'

import { axiosClassic } from '../api/api.interceptors'


export default class MovieService {
	static async getAllMovies(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: {
				...(searchTerm ? { searchTerm: searchTerm } : {}),
			},
		})
	}

	static async getRandomMovie() {
		return axiosClassic.get<IMovie>(getMoviesUrl('/random'))
	}
}

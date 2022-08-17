import { IGenreItem } from '@/components/Genres/genres.interface'

import { IMovie } from '@/shared/types/movie.types'

export interface ISearchData {
	title: string
	items?: IMovie[] | IGenreItem[]
}

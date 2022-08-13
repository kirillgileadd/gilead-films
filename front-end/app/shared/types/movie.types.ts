import { IGenreItem } from '@/components/Genres/genres.interface'

export interface IParameter {
	year: number
	duration: number
	country: string
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	parameters: IParameter
	rating?: number
	genres: IGenreItem[]
	countOpened?: number
	videoUrl: string
	actors: IActorModel[]
	slug: string
	isSendTelegram?: boolean
}

export interface IActorModel {
	name: string
	photo: string
	slug: string
}

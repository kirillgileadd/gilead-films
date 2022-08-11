import { TypeMaterialIcons } from '@/shared/types/itcon.types'

export interface IGenre {
	title: string
	items: IGenreItem[]
}

export interface IGenreItem {
	id: string
	title: string
	icon: TypeMaterialIcons
	link: string
	description: string
}

export interface IFetchGenreItem {
	_id: string
	name: string
	icon: TypeMaterialIcons
	slug: string
	description: string
	createdAt: string
}

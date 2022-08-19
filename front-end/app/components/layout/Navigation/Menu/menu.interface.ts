import { TypeMaterialIcons } from '@/shared/../../../../types/itcon.types'

export interface IMenuItem {
	icon: TypeMaterialIcons
	title: string
	href: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}

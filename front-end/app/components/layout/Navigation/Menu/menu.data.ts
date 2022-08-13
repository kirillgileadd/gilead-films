import { IMenu } from '@/components/layout/Navigation/Menu/menu.interface'

export const menuData: IMenu = {
	title: 'Menu',
	items: [
		{
			title: 'Home',
			icon: 'MdOutlineHomeWork',
			href: '/',
		},
		{
			title: 'Discovery',
			icon: 'MdOutlineHomeWork',
			href: '/discovery',
		},
		{
			title: 'Popular',
			icon: 'MdOutlineHomeWork',
			href: '/popular',
		},
	],
}

export const authMenu: IMenu = {
	title: 'General',
	items: [],
}

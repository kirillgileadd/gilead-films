import { IMenu } from '@/components/layout/Navigation/Menu/menu.interface'

export const menuData: IMenu = {
	title: 'Меню',
	items: [
		{
			title: 'Главная',
			icon: 'MdHomeWork',
			href: '/',
		},
		{
			title: 'Популярное',
			icon: 'MdPoll',
			href: '/popular',
		},
		{
			title: 'В разработке',
			icon: 'MdWatchLater',
			href: '/commig-soon',
		},
	],
}

export const authMenu: IMenu = {
	title: 'Общее',
	items: [],
}

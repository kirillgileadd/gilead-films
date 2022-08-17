import { FC } from 'react'

import MenuItem from '@/components/layout/Navigation/Menu/MenuItem'
import { NoSSRAuthItems } from '@/components/layout/Navigation/Menu/auth/NoSSRAuthItems'
import { IMenu } from '@/components/layout/Navigation/Menu/menu.interface'

import styles from './Menu.module.scss'


const Menu: FC<{ menu: IMenu }> = ({ menu }) => {
	const menuItems = menu.items.map((item) => (
		<MenuItem key={item.href} {...item} />
	))

	return (
		<div className={styles.menu}>
			<h6 className="pl-layout">{menu.title}</h6>
			<div className={styles.lists}>
				<ul>{menuItems}</ul>
				{menu.title === 'General' && <NoSSRAuthItems />}
			</div>
		</div>
	)
}

export default Menu

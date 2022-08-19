import { memo } from 'react'

import Logo from '@/components/layout/Navigation/Logo'
import Menu from '@/components/layout/Navigation/Menu/Menu'
import {
	authMenu,
	menuData,
} from '@/components/layout/Navigation/Menu/menu.data'
import RandomMovie from '@/components/layout/Navigation/RandomMovie/RandomMovie'

import styles from './Navigation.module.scss'


const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<div className="ml-layout">
				<Logo />
			</div>
			<Menu menu={menuData} />
			<Menu menu={authMenu} />
			<RandomMovie />
		</div>
	)
}

export default memo(Navigation)

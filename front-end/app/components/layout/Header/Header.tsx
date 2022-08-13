import IconsMenu from '@/components/layout/Header/IconsMenu/IconsMenu'
import Search from '@/components/layout/Header/Search/Search'

import NavigationButtons from '@/ui/Button/NavigationButtons'

import styles from './Header.module.scss'


const Header = () => {
	return (
		<div className={styles.header}>
			<NavigationButtons />
			<Search />
			<IconsMenu />
		</div>
	)
}

export default Header

import { useState } from 'react'

import Search from '@/components/layout/Header/Search/Search'

import NavigationButtons from '@/ui/Button/NavigationButtons'
import MaterialIcon from '@/ui/MaterialIcon'

import styles from './Header.module.scss'


const Header = () => {
	const [inputValue, setInputValue] = useState<string>('')
	return (
		<div className={styles.header}>
			<NavigationButtons />
			<Search />

			<MaterialIcon icon={'MdSupervisedUserCircle'} />
		</div>
	)
}

export default Header

import { useState } from 'react'

import NavigationButtons from '@/ui/Button/NavigationButtons'
import SearchInput from '@/ui/Input/SearchInput'
import MaterialIcon from '@/ui/MaterialIcon'

import styles from './Header.module.scss'


const Header = () => {
	const [inputValue, setInputValue] = useState<string>('')
	return (
		<div className={styles.header}>
			<NavigationButtons />
			<SearchInput
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>

			<MaterialIcon icon={'MdSupervisedUserCircle'} />

		</div>
	)
}

export default Header

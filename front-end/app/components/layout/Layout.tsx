import { FC, ReactNode } from 'react'

import Header from './Header/Header'
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'


const Layout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.main}>
				<Header />
				{children}
			</div>
		</div>
	)
}

export default Layout

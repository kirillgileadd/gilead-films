import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from '../Header.module.scss'


const IconsMenu: FC = () => {
	return (
		<div className={styles.icons__menu}>
			<Link href={'favorites'}>
				<a href="">
					<MaterialIcon icon={'MdFavorite'} />
				</a>
			</Link>
			<Link href={'profile'}>
				<a href="">
					<MaterialIcon icon={'MdSupervisedUserCircle'} />
				</a>
			</Link>
		</div>
	)
}

export default IconsMenu

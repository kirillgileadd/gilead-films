import cl from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { MdLogin } from 'react-icons/all'

import styles from '@/components/layout/Navigation/Menu/Menu.module.scss'

import MaterialIcon from '@/ui/MaterialIcon'


const AuthItem: FC = () => {
	const router = useRouter()
	return (
		<li
			className={cl({
				[styles.active]: router.asPath === '/auth',
			})}
		>
			<Link href="/auth">
				<a className="flex items-center">
					<MaterialIcon icon={'MdLogin'} />
					<p>Login</p>
				</a>
			</Link>
		</li>
	)
}

export default AuthItem

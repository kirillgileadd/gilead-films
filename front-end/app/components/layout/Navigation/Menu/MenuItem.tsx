import cl from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { IMenuItem } from '@/components/layout/Navigation/Menu/menu.interface'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from './Menu.module.scss'


const MenuItem: FC<IMenuItem> = ({ icon, title, href }) => {
	const router = useRouter()
	console.log(href === router.asPath)
	return (
		<li
			className={cl({
				[styles.active]: router.asPath === href,
			})}
		>
			<Link href={href}>
				<a className="flex items-center">
					<MaterialIcon icon={icon} />
					<p>{title}</p>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem

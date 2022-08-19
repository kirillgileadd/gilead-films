import cl from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, memo } from 'react'

import { IMenuItem } from '@/components/layout/Navigation/Menu/menu.interface'

import { NoSSRMaterialIcon } from '@/ui/NoSSRMaterialIcon'

import styles from './Menu.module.scss'


const MenuItem: FC<IMenuItem> = ({ icon, title, href }) => {
	const router = useRouter()
	return (
		<li
			className={cl({
				[styles.active]: router.asPath === href,
			})}
		>
			<Link href={href}>
				<a className="flex items-center">
					<NoSSRMaterialIcon icon={icon} />
					<p>{title}</p>
				</a>
			</Link>
		</li>
	)
}

export default memo(MenuItem)

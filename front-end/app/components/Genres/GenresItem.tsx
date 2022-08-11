import Link from 'next/link'
import React, { FC } from 'react'

import { IGenreItem } from '@/components/Genres/genres.interface'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from './Genres.module.scss'


const GenresItem: FC<IGenreItem> = ({ title, icon, description, link }) => {
	return (
		<li className={styles.genre__item}>
			<Link href={link}>
				<a>
					<MaterialIcon icon={icon} />
					<h6>{title}</h6>
					{/*<p>{description}</p>*/}
				</a>
			</Link>
		</li>
	)
}

export default GenresItem

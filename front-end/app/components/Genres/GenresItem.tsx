import Link from 'next/link'
import React, { FC } from 'react'

import { IGenreItem } from '@/components/Genres/genres.interface'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from './Genres.module.scss'


const GenresItem: FC<IGenreItem> = ({ name, icon, description, slug }) => {
	return (
		<li className={styles.genre__item}>
			<Link href={slug}>
				<a>
					<MaterialIcon icon={icon} />
					<h6>{name}</h6>
					<p>{description}</p>
				</a>
			</Link>
		</li>
	)
}

export default GenresItem

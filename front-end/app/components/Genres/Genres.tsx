import React, { FC } from 'react'

import GenresItem from '@/components/Genres/GenresItem'
import { useGenre } from '@/components/Genres/useGenre'

import styles from './Genres.module.scss'


const Genres: FC = () => {
	const { data, isLoading } = useGenre()

	const genresItem =
		data && data.map((genre) => <GenresItem key={genre.id} {...genre} />)

	return (
		<div>
			<h3 className="text-title mb-6">Genres</h3>
			<ul className={styles.genre__list}>{genresItem}</ul>
		</div>
	)
}

export default Genres

import React, { FC } from 'react'

import GenresItem from '@/components/Genres/GenresItem'
import { useGenre } from '@/components/Genres/useGenre'

import SkeletonLoader from '@/ui/loading/SkeletonLoader'

import styles from './Genres.module.scss'


const Genres: FC = () => {
	const { data, isLoading } = useGenre()

	const genresItem =
		data && data.map((genre) => <GenresItem key={genre.id} {...genre} />)

	return (
		<div>
			{isLoading ? (
				<div>
					<SkeletonLoader className="h-6 mb-6 w-12" width={80} />
					<SkeletonLoader
						width={'20%'}
						count={4}
						inline
						className="h-32 w-1/5 mr-6"
					/>
				</div>
			) : (
				<>
					<h3 className="text-title mb-6">Genres</h3>
					<ul className={styles.genre__list}>{genresItem}</ul>
				</>
			)}
		</div>
	)
}

export default Genres

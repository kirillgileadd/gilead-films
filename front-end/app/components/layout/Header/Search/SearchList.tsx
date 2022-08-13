import Image from 'next/image'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import styles from './Search.module.scss'


const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	console.log(movies)
	return (
		<div className={styles.list__box}>
			{movies.length ? (
				<>
					<h3 className="text-title">Movies</h3>
					<ul className={styles.list}>
						{movies.map((movie) => (
							<li key={movie._id}>
								<Image
									src={movie.poster || ''}
									width={120}
									height={150}
									objectFit="cover"
									objectPosition="top"
									alt={movie.title}
									draggable={false}
								/>
								<h6>{movie.title}</h6>
							</li>
						))}
					</ul>
				</>
			) : (
				<p>Movies not found</p>
			)}
		</div>
	)
}

export default SearchList

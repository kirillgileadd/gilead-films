import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IMovie } from '@/shared/types/movie.types'

import styles from './Search.module.scss'


const MoviesSearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.search__list_item}>
			{movies.length > 0 && (
				<>
					<h3 className="text-title">Movies</h3>
					<ul className={styles.list}>
						{movies.map((movie) => (
							<li key={movie._id}>
								<Link href={`/movie/${movie.slug}`}>
									<a>
										<Image
											src={movie.poster || ''}
											width={180}
											height={220}
											objectFit="cover"
											objectPosition="top"
											alt={movie.title}
											draggable={false}
										/>
										<h6>{movie.title}</h6>
									</a>
								</Link>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}

export default MoviesSearchList

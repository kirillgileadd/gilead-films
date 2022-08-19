import Link from 'next/link'
import { FC } from 'react'

import { IGenreItem } from '@/components/Genres/genres.interface'
import styles from '@/components/layout/Header/Search/Search.module.scss'


const GenreSearchList: FC<{ genres: IGenreItem[] }> = ({ genres }) => {
	return (
		<div className={styles.search__list_item}>
			{genres.length > 0 && (
				<>
					<h3 className="text-title">Жанры</h3>
					<ul className={styles.list}>
						{genres.map((genre) => (
							<li key={genre._id}>
								<Link href={`/movie/${genre.slug}`}>
									<a>
										<h6>{genre.name}</h6>
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

export default GenreSearchList

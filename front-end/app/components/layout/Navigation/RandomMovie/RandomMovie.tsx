import { useRouter } from 'next/router'
import { FC } from 'react'
import { useQuery } from 'react-query'

import styles from '@/components/layout/Navigation/Navigation.module.scss'

import MaterialIcon from '@/ui/MaterialIcon'

import { IMovie } from '@/shared/types/movie.types'

import MovieService from '@/services/MovieService'

import { getMovieUrl } from '@/configs/url.config'


const RandomMovie: FC = () => {
	const { data, isSuccess } = useQuery(
		'get random movie',
		() => MovieService.getRandomMovie(),
		{
			select: ({ data }) =>
				({ ...data, slug: getMovieUrl(data.slug) } as IMovie),
		}
	)
	const router = useRouter()
	const getRandomMovie = () => {
		console.log(data)
		if (data) {
			router.push(data.slug)
		}
	}

	return (
		<div className={styles.random__movie}>
			<div>
				<MaterialIcon icon={'MdRadar'} />
			</div>
			<h6>Не знаешь что выбрать?</h6>
			<p>Доверься удачи</p>
			<button onClick={getRandomMovie} className="btn-primary">
				Рандомный Фильм!
			</button>
		</div>
	)
}

export default RandomMovie

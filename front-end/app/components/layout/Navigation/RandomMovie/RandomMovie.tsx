import { useRouter } from 'next/router'
import { FC, memo } from 'react'
import { useQuery } from 'react-query'

import styles from '@/components/layout/Navigation/Navigation.module.scss'

import MaterialIcon from '@/ui/MaterialIcon'

import MovieService from '@/services/MovieService'

import { getMovieUrl } from '@/configs/api.config'

import { IMovie } from '../../../../types/movie.types'


const RandomMovie: FC = () => {
	const router = useRouter()
	const { data, refetch } = useQuery(
		'get random movie',
		() => MovieService.getRandomMovie(),
		{
			select: ({ data }) =>
				({ ...data, slug: getMovieUrl(data.slug) } as IMovie),
			refetchOnWindowFocus: false,
		}
	)

	const getRandomMovie = () => {
		refetch()
		if (data) {
			router.push(data.slug)
		}
	}

	return (
		<div className={styles.random__movie}>
			<div>
				<MaterialIcon icon={'MdMovie'} />
			</div>
			<h6>Не знаешь что выбрать?</h6>
			<p>Положись на удачу</p>
			<button onClick={getRandomMovie} className="btn-primary">
				Рандомный Фильм!
			</button>
		</div>
	)
}

export default memo(RandomMovie)

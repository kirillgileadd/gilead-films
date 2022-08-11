import { FC } from 'react'

import { Meta } from '@/utils/meta/Meta'

import Genres from '../../components/Genres/Genres'

import { IHome } from './home.interface'


const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="MovieApp watch movies free online goblin"
		>
			<Genres />
		</Meta>
	)
}

export default Home

import { FC } from 'react'

import Genres from '../../components/Genres/Genres'
import Layout from '../../components/layout/Layout'

import { IHome } from './home.interface'


const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h3>Home Page</h3>
			<Genres />
		</Layout>
	)
}

export default Home

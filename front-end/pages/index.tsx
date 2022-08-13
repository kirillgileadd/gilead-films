import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'

import Home from '../app/screens/home/Home'


const HomePage: NextPage = () => {
	return (
		<Layout>
			<Home />
		</Layout>
	)
}

export default HomePage

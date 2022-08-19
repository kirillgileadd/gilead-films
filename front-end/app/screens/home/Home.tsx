import Image from 'next/image'
import { FC } from 'react'

import testImage from '@/assets/img/witcher.jpg'

import { Meta } from '@/utils/meta/Meta'

import Genres from '../../components/Genres/Genres'

import styles from './Home.module.scss'
import { IHome } from './home.interface'


const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="MovieApp watch movies free online goblin"
		>
			<div className={styles.main}>
				<div className="mb-6">
					<Image
						draggable={false}
						height={600}
						objectFit="cover"
						className="rounded-3xl"
						objectPosition="center"
						src={testImage}
					/>
				</div>

				<Genres />
			</div>
		</Meta>
	)
}

export default Home

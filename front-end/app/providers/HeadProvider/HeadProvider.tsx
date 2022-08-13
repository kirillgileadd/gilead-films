import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { FC, ReactNode } from 'react'

import { primaryColor } from '@/configs/constans'

import Favicons from './Favicon'


const HeadProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<NextNProgress
				color={primaryColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>
				<Favicons />
			</Head>
			{children}
		</>
	)
}

export default HeadProvider

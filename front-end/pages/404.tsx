import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '@/components/layout/Navigation/Logo'

import background from '@/assets/img/404bg2.jpg'

import { Meta } from '@/utils/meta/Meta'

import styles from '../styles/404.module.scss'


const Error404 = () => {
	return (
		<Meta title="Page not found">
			<main className={styles.main}>
				<Image className={styles.background} src={background} layout="fill" />
				<div className={styles.content}>
					<div className="absolute left-layout top-layout">
						<Logo />
					</div>
					<h3 className="text-title ">404 Page Not Found</h3>
					<Link href="/">
						<a className="btn-primary">Back to Home</a>
					</Link>
				</div>
			</main>
		</Meta>
	)
}

export default Error404

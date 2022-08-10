import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logo from '@/assets/img/logo.svg'


const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="inline-block mx-layout cursor-pointer">
				<Image src={logo} width={114} height={45} draggable={false} />
			</a>
		</Link>
	)
}

export default Logo

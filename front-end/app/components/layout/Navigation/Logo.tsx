import Image from 'next/image'
import Link from 'next/link'
import { FC, memo } from 'react'

import logoWhite from '@/assets/img/logo-white.svg'
import logo from '@/assets/img/logo.svg'


const Logo: FC<{ color?: 'white' | 'black' }> = ({ color }) => {
	return (
		<Link href="/">
			<a className="inline-block cursor-pointer">
				<Image
					src={color === 'white' ? logoWhite : logo}
					width={114}
					height={45}
					draggable={false}
				/>
			</a>
		</Link>
	)
}

export default memo(Logo)

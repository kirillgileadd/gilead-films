import { useRouter } from 'next/router'
import React, { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'


const NavigationButtons: FC = () => {
	const router = useRouter()
	return (
		<div className="flex">
			<button onClick={() => router.back()}>
				<MaterialIcon icon={'MdArrowBack'} />
			</button>
			<button>
				<MaterialIcon icon={'MdArrowForward'} />
			</button>
		</div>
	)
}

export default NavigationButtons

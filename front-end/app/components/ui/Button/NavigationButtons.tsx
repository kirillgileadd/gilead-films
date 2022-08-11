import React, { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'


const NavigationButtons: FC = () => {
	return (
		<div className="flex">
			<MaterialIcon icon={'MdArrowBack'} />
			<MaterialIcon icon={'MdArrowForward'} />
		</div>
	)
}

export default NavigationButtons

import React, { FC, memo } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIcons } from '../../types/itcon.types'


const MaterialIcon: FC<{ icon: TypeMaterialIcons }> = ({ icon }) => {
	const Icon = MaterialIcons[icon]
	return (
		<Icon className="w-6 h-6 text-gray-600" /> || (
			<MaterialIcons.MdFilterDrama />
		)
	)
}

export default memo(MaterialIcon)

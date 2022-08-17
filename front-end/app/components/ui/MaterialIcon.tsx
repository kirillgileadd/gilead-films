import React, { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIcons } from '@/shared/types/itcon.types'


const MaterialIcon: FC<{ icon: TypeMaterialIcons }> = ({ icon }) => {
	const Icon = MaterialIcons[icon]
	return <Icon className="w-6 h-6" /> || <MaterialIcons.MdFilterDrama />
}

export default MaterialIcon

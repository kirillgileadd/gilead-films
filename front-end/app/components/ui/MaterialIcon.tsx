import React, { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIcons } from '@/shared/types/itcon.types'


const MaterialIcon: FC<{ icon: TypeMaterialIcons }> = ({ icon }) => {
	const Icon = MaterialIcons[icon]
	return <Icon /> || <MaterialIcons.Md9KPlus />
}

export default MaterialIcon

import React, { FC } from 'react'
import { MdLogin } from 'react-icons/all'

import MaterialIcon from '@/ui/MaterialIcon'


const AuthItem: FC = () => {
	return (
		<li>
			<a className="flex items-center">
				<MaterialIcon icon={'MdLogin'} />
				<p>Login</p>
			</a>
		</li>
	)
}

export default AuthItem

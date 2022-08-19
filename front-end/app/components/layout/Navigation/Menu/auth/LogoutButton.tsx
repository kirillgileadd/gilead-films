import React, { MouseEvent } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import { useActions } from '@/hooks/useActions'


const LogoutButton = () => {
	const { logout } = useActions()

	const onLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li className="cursor-pointer">
			<a onClick={onLogout}>
				<MaterialIcon icon={'MdLogout'} />
				<p>Выйти</p>
			</a>
		</li>
	)
}

export default LogoutButton

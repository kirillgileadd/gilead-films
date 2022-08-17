import { FC } from 'react'

import MenuItem from '@/components/layout/Navigation/Menu/MenuItem'
import LogoutButton from '@/components/layout/Navigation/Menu/auth/LogoutButton'

import { useTypedSelector } from '@/hooks/useTypedSelector'


const AuthItems: FC = () => {
	const { user } = useTypedSelector((state) => state.user)

	return (
		<ul>
			{user ? (
				<>
					<MenuItem icon={'MdSettings'} title={'Profile'} href={'/profile'} />
					<LogoutButton />
				</>
			) : (
				<MenuItem icon={'MdLogin'} title={'Login'} href={'/auth'} />
			)}
		</ul>
	)
}

export default AuthItems

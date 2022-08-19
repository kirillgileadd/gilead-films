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
					<MenuItem icon={'MdSettings'} title={'Профиль'} href={'/profile'} />
					<LogoutButton />
				</>
			) : (
				<MenuItem icon={'MdLogin'} title={'Войти'} href={'/auth'} />
			)}
			{user?.isAdmin && (
				<MenuItem
					icon={'MdOutlineLock'}
					href={'/menage'}
					title={'Панель Администратора'}
				/>
			)}
		</ul>
	)
}

export default AuthItems

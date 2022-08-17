import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'


export const useAuthRedirect = () => {
	const { user } = useAuth()

	const { query, push, replace } = useRouter()

	const redirect = query.redirect ? String(query.redirect) : '/'

	useEffect(() => {
		if (user) replace(redirect)
	}, [user, redirect, push])
}

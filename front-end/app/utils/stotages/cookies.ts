import Cookies from 'js-cookie'

import { ITokens } from '@/store/user/user.interface'

export const setTokens = (tokens: ITokens) => {
	Cookies.set('accessToken', tokens.accessToken)
	Cookies.set('refreshToken', tokens.refreshToken)
}

export const removeTokens = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}

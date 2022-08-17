import { setTokens } from '@/utils/stotages/cookies'

import { IS_CLIENT } from '@/configs/constans'

import { IAuthResponse } from '@/store/user/user.interface'


export const getLocalData = (value: string) => {
	if (typeof localStorage !== 'undefined' && IS_CLIENT) {
		const ls = localStorage.getItem(value)
		return ls ? JSON.parse(ls) : null
	}
	return null
}

export const saveToLocalStorage = (value: IAuthResponse, name: string) => {
	if (IS_CLIENT) {
		const tokens = {
			accessToken: value!.accessToken!,
			refreshToken: value!.refreshToken!,
		}
		setTokens(tokens)
		localStorage.setItem(name, JSON.stringify(value))
	}
}

import { AxiosResponse } from 'axios'

import { removeTokens } from '@/utils/stotages/cookies'
import { saveToLocalStorage } from '@/utils/stotages/local-storage'

import { getAuthUrl } from '@/configs/api.config'

import {
	IAuthResponse,
	InterfaceEmailPassword,
} from '@/store/user/user.interface'

import { axiosClassic } from '../api/api.interceptors'


export const AuthService = {
	async register(
		userData: InterfaceEmailPassword
	): Promise<AxiosResponse<IAuthResponse>> {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/register'),
			userData
		)
		console.log(response)
		if (response.data.accessToken) {
			saveToLocalStorage(response.data, 'user')
		}

		return response
	},

	async logout() {
		removeTokens()
		localStorage.removeItem('user')
	},
}

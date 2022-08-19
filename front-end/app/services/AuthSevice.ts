import { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'

import { getContentType } from '@/utils/api/api.helpers'
import { $api } from '@/utils/api/api.interceptors'
import { removeTokens } from '@/utils/stotages/cookies'
import { saveToLocalStorage } from '@/utils/stotages/local-storage'

import { getAuthUrl } from '@/configs/api.config'

import {
	IAuthResponse,
	InterfaceEmailPassword,
} from '@/store/user/user.interface'


export default class AuthService {
	static async register(
		userData: InterfaceEmailPassword
	): Promise<AxiosResponse<IAuthResponse>> {
		const response = await $api.post<IAuthResponse>(
			getAuthUrl('/register'),
			userData
		)

		if (response.data.accessToken) {
			saveToLocalStorage(response.data, 'user')
		}

		return response
	}

	static async login(
		userData: InterfaceEmailPassword
	): Promise<AxiosResponse<IAuthResponse>> {
		const response = await $api.post<IAuthResponse>(
			getAuthUrl('/login'),
			userData
		)

		if (response.data.accessToken) {
			saveToLocalStorage(response.data, 'user')
		}

		return response
	}

	static async logout() {
		removeTokens()
		localStorage.removeItem('user')
	}

	static async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await $api.post<IAuthResponse>(
			getAuthUrl('/login/access-token'),
			{ refreshToken },
			{ headers: getContentType() }
		)
		if (response.data.accessToken) {
			saveToLocalStorage(response.data, 'user')
		}

		return response
	}
}

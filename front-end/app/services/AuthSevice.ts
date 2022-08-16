import { AxiosResponse } from 'axios'

import { removeTokens } from '@/utils/stotages/cookies'
import { saveToLocalStorage } from '@/utils/stotages/local-storage'

import { getAuthUrl } from '@/configs/api.config'

import {
	IAuthResponse,
	InterfaceEmailPassword,
} from '@/store/user/user.interface'

import { axiosClassic } from '../api/api.interceptors'


export default class AuthService {
	static async register(
		userData: InterfaceEmailPassword
	): Promise<AxiosResponse<IAuthResponse>> {
		const response = await axiosClassic.post<IAuthResponse>(
			getAuthUrl('/register'),
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
}

import axios from 'axios'
import Cookies from 'js-cookie'

import AuthService from '@/services/AuthSevice'

import { errorCatch } from '@/utils/api/api.helpers'
import { removeTokens } from '@/utils/stotages/cookies'

import { API_URL } from '@/configs/api.config'


export const $api = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
})

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()

				return instance.request(originalRequest)
			} catch (e) {
				if (errorCatch(e) === 'jwt expired') removeTokens()
			}
		}

		throw error
	}
)

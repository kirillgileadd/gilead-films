import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import AuthService from '@/services/AuthSevice'

import { toastError } from '@/utils/api/toastr.error'

import { InterfaceEmailPassword } from '@/store/user/user.interface'

import { errorCatch } from '../../api/api.helpers'


export const register = createAsyncThunk(
	'auth/register',
	async (userData: InterfaceEmailPassword, thunkApi) => {
		try {
			const response = await AuthService.register(userData)
			toastr.success('Registration', 'Completed successfully')
			return response.data
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk(
	'auth/login',
	async (userData: InterfaceEmailPassword, thunkApi) => {
		try {
			const response = await AuthService.login(userData)
			toastr.success('Login', 'Completed successfully')
			return response.data
		} catch (e) {
			toastError(e)
			return thunkApi.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk(
	'auth/checkAuth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			return response.data
		} catch (e) {
			if (errorCatch(e) === 'jwt expired') {
				toastr.error(
					'Logout',
					'Your authorizaiton is finished, plz sign in again'
				)
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(e)
		}
	}
)

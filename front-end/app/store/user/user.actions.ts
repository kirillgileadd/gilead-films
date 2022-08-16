import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import AuthService from '@/services/AuthSevice'

import { toastError } from '@/utils/api/toastr.error'

import { InterfaceEmailPassword } from '@/store/user/user.interface'


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
			const response = await AuthService.register(userData)
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

//checkauth

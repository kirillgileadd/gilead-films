import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/AuthSevice'

import { InterfaceEmailPassword } from '@/store/user/user.interface'


export const register = createAsyncThunk(
	'auth/register',
	async (userData: InterfaceEmailPassword) => {
		const response = await AuthService.register(userData)
		toastr.success('Registration', 'Completed successfully')
		return response.data
	}
)
//login

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

//checkauth

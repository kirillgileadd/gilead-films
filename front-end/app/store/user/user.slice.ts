import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { getLocalData } from '@/utils/stotages/local-storage'

import { checkAuth, login, logout, register } from '@/store/user/user.actions'
import { IAuthResponse, IInitialState } from '@/store/user/user.interface'


export const initialState: IInitialState = {
	user: getLocalData('user'),
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state, action) => {
				state.isLoading = true
			})
			.addCase(
				register.fulfilled,
				(state, action: PayloadAction<IAuthResponse>) => {
					state.user = action.payload.user
					state.isLoading = false
				}
			)
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, (state, action) => {
				state.isLoading = true
			})
			.addCase(
				login.fulfilled,
				(state, action: PayloadAction<IAuthResponse>) => {
					state.user = action.payload.user
					state.isLoading = false
				}
			)

			.addCase(login.rejected, (state, action) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user
			})
	},
})

export const { reducer } = userSlice

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { getLocalData } from '@/utils/stotages/local-storage'

import { login, register } from '@/store/user/user.actions'
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
		builder.addCase(register.pending, (state, action) => {
			state.isLoading = true
		})
		builder.addCase(
			register.fulfilled,
			(state, action: PayloadAction<IAuthResponse>) => {
				state.user = action.payload.user
				state.isLoading = false
			}
		)
		builder.addCase(register.rejected, (state, action) => {
			state.isLoading = false
			state.user = null
		})
		builder.addCase(login.pending, (state, action) => {
			state.isLoading = true
		})
		builder.addCase(
			login.fulfilled,
			(state, action: PayloadAction<IAuthResponse>) => {
				state.user = action.payload.user
				state.isLoading = false
			}
		)
		builder.addCase(login.rejected, (state, action) => {
			state.isLoading = false
			state.user = null
		})
	},
})

export const { reducer } = userSlice

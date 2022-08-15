import { createSlice } from '@reduxjs/toolkit'

import { getLocalData } from '@/utils/stotages/local-storage'

import { register } from '@/store/user/user.actions'
import { IInitialState } from '@/store/user/user.interface'


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
		builder.addCase(register.fulfilled, (state, action) => {
			state.user = action.payload.user
		})
	},
})

export const { reducer } = userSlice

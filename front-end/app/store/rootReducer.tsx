import { reducer as toastrReducer } from 'react-redux-toastr'

import { authApi } from '@/store/auth/auth.api'

import { reducer as userReducer } from './user/user.slice'


export const rootReducer = {
	user: userReducer,
	[authApi.reducerPath]: authApi.reducer,
	toastr: toastrReducer,
}

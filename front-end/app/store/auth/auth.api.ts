import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { saveToLocalStorage } from '@/utils/stotages/local-storage'

import { getAuthUrl } from '@/configs/api.config'

import { IAuthResponse } from '@/store/user/user.interface'


export const authApi = createApi({
	reducerPath: 'auth/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4200/api',
	}),
	refetchOnFocus: true,
	endpoints: (build) => ({
		register: build.mutation<IAuthResponse, any>({
			query: (body) => ({
				url: getAuthUrl('/register'),
				method: 'POST',
				body,
			}),
			async onCacheEntryAdded(
				response,
				{
					dispatch,
					getState,
					extra,
					requestId,
					cacheEntryRemoved,
					cacheDataLoaded,
					getCacheEntry,
				}
			) {
				saveToLocalStorage(response, 'user')
				console.log('DDOOONE', response)
			},
		}),
	}),
})

export const { useRegisterMutation } = authApi

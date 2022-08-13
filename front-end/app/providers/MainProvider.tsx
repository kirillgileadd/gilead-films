import React, { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import ReduxToast from '@/ui/redux-toast/ReduxToast'

import { store } from '@/store/store'

import HeadProvider from './HeadProvider/HeadProvider'


declare module 'react-query/types/react/QueryClientProvider' {
	interface QueryClientProviderProps {
		children?: ReactNode
	}
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
				<ReduxToast />
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider

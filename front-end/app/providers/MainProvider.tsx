import React, { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

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
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default MainProvider

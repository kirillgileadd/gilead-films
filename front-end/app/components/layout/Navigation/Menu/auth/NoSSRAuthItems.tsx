import dynamic from 'next/dynamic'

export const NoSSRAuthItems = dynamic(() => import('./AuthItems'), {
	ssr: false,
})

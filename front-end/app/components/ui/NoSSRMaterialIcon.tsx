import dynamic from 'next/dynamic'

export const NoSSRMaterialIcon = dynamic(() => import('./MaterialIcon'), {
	ssr: false,
})

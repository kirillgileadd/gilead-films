import cl from 'classnames'
import React, { FC } from 'react'
import Skeleton, { SkeletonProps, SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface SkeletonPropsWithChildren extends SkeletonProps {
	className?: string
}

const SkeletonLoader: FC<SkeletonPropsWithChildren> = ({
	className,
	...rest
}) => {
	return (
		<SkeletonTheme baseColor="#26272C" highlightColor="#313131">
			<Skeleton {...rest} className={cl('rounded-3xl', className)} />
		</SkeletonTheme>
	)
}

export default SkeletonLoader

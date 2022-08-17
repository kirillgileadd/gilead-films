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
		<SkeletonTheme baseColor="#EEEEF9" highlightColor="#F9FAFF">
			<Skeleton {...rest} className={cl('rounded-3xl', className)} />
		</SkeletonTheme>
	)
}

export default SkeletonLoader

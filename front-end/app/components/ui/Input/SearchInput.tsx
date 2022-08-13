import React, { FC, Ref, forwardRef } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from './SearchInput.module.scss'

interface SearchInputProps {
	value: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
	ref?: any
	onBlur?: () => void
	focus?: boolean
}

// eslint-disable-next-line react/display-name
const SearchInput: FC<SearchInputProps> = forwardRef(
	({ value, onChange }, ref: Ref<HTMLInputElement>) => {
		return (
			<div className={styles.input}>
				<MaterialIcon icon="MdSearch" />
				<input
					ref={ref}
					className={styles.input__value}
					placeholder="Search"
					value={value}
					onChange={onChange}
					type="text"
					name="search-input"
					id="search-input"
				/>
			</div>
		)
	}
)

export default SearchInput

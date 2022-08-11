import React, { FC } from 'react'

import MaterialIcon from '@/ui/MaterialIcon'

import styles from './SearchInput.module.scss'

interface SearchInputProps {
	value: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
}

const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
	return (
		<div className={styles.input}>
			<MaterialIcon icon="MdSearch" />
			<input
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

export default SearchInput

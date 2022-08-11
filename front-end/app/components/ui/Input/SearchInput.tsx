import React, { FC } from 'react'

import styles from './SearchInput.module.scss'

interface SearchInputProps {
	value: string
	onChange: React.ChangeEventHandler<HTMLInputElement>
}

const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
	return (
		<input
			placeholder="Search"
			className={styles.input}
			value={value}
			onChange={onChange}
			type="text"
			name="search-input"
			id="search-input"
		/>
	)
}

export default SearchInput

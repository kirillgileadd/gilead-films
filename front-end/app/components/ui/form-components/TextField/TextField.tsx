import cl from 'classnames'
import { FC, HTMLAttributes } from 'react'

import styles from './TextField.module.scss'


export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
	value: string
	name: string
	label?: string
	type: string
	helperText?: string
}

const TextField: FC<TextFieldProps> = ({
	value,
	onChange,
	label,
	helperText,
	...rest
}) => {
	return (
		<div className={cl({ [styles.error]: helperText }, styles.text_field__box)}>
			<label htmlFor="text-field">{label}</label>
			<input {...rest} value={value} onChange={onChange} id="text-field" />
			<p>{helperText}</p>
		</div>
	)
}

export default TextField

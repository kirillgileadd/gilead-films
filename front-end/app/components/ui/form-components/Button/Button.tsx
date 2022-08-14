import { FC, HTMLAttributes, ReactNode } from 'react'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

const Button: FC<IButton> = ({ children, onClick, ...rest }) => {
	return (
		<button {...rest} onClick={onClick} className="btn-primary">
			{children}
		</button>
	)
}

export default Button

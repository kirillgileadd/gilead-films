import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/ui/form-components/Button/Button'
import TextField from '@/ui/form-components/TextField/TextField'

import { validEmail } from '@/shared/regex'

import { Meta } from '@/utils/meta/Meta'

import { useRegisterMutation } from '@/store/auth/auth.api'

import styles from './Auth.module.scss'
import { IAuthFieds } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'


const Auth: FC = () => {
	useAuthRedirect()

	const [formType, setFormType] = useState<'login' | 'register'>('login')
	// const { register } = useActions()
	const [register] = useRegisterMutation()
	const isPasswordRequired = true

	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<IAuthFieds>({
		mode: 'onChange',
		defaultValues: { email: '', password: '' },
	})

	const onSubmit: SubmitHandler<IAuthFieds> = (data) => {
		console.log(data)
		register(data)
	}

	return (
		<Meta title="Auth">
			<section className={styles.auth__box}>
				<h3 className="text-title">Auth</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="email"
						control={control}
						rules={{
							required: 'Email is required',
							pattern: {
								value: validEmail,
								message: 'Invalid Email',
							},
						}}
						render={({ field: { value, onChange, name } }) => (
							<TextField
								helperText={errors.email?.message}
								type="email"
								value={value}
								label={'email'}
								onChange={onChange}
								name={name}
							/>
						)}
					/>
					<Controller
						name="password"
						control={control}
						rules={
							isPasswordRequired
								? {
										required: 'Password is required',
										minLength: {
											value: 6,
											message: 'Min length must be more 6 symbols',
										},
								  }
								: {}
						}
						render={({ field: { value, onChange, name } }) => (
							<TextField
								helperText={errors.password?.message}
								type="password"
								value={value}
								label={'password'}
								onChange={onChange}
								name={name}
							/>
						)}
					/>
					<div className={styles.toggle__auth}>
						{formType === 'login' ? (
							<>
								<p className="break-words ">
									Do not you have an account?
									<span onClick={() => setFormType('register')}>Register</span>
								</p>
								<Button>Login</Button>
							</>
						) : (
							<>
								<p className="break-words ">
									Do you already have an account?
									<span onClick={() => setFormType('login')}>Log in</span>
								</p>
								<Button>Register</Button>
							</>
						)}
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth

import { FC, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/ui/form-components/Button/Button'
import TextField from '@/ui/form-components/TextField/TextField'

import { useActions } from '@/hooks/useActions'

import { Meta } from '@/utils/meta/Meta'
import { validEmail } from '@/utils/regex/regex'

import { login } from '@/store/user/user.actions'

import styles from './Auth.module.scss'
import { IAuthFieds } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'


const Auth: FC = () => {
	useAuthRedirect()

	const [formType, setFormType] = useState<'login' | 'register'>('login')
	const { register, login } = useActions()
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
		if (formType === 'login') login(data)
		else if (formType === 'register') register(data)
	}

	return (
		<Meta title="Auth">
			<section className={styles.auth__box}>
				<h3 className="text-title">
					{formType === 'login' ? 'Авторизация' : 'Регистрация'}
				</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="email"
						control={control}
						rules={{
							required: 'Введите свою почту',
							pattern: {
								value: validEmail,
								message: 'Неправильный адрес',
							},
						}}
						render={({ field: { value, onChange, name } }) => (
							<TextField
								helperText={errors.email?.message}
								type="email"
								value={value}
								label={'Почта'}
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
										required: 'Введите пароль',
										minLength: {
											value: 6,
											message: 'Пароль должен быть больше 6 символов',
										},
								  }
								: {}
						}
						render={({ field: { value, onChange, name } }) => (
							<TextField
								helperText={errors.password?.message}
								type="password"
								value={value}
								label={'Пароль'}
								onChange={onChange}
								name={name}
							/>
						)}
					/>
					<div className={styles.toggle__auth}>
						{formType === 'login' ? (
							<>
								<p className="break-words ">
									Нет аккаунта?
									<span onClick={() => setFormType('register')}>
										Зарегистритуйтесь
									</span>
								</p>
								<Button>Войти</Button>
							</>
						) : (
							<>
								<p className="break-words ">
									Уже есть аккаунт?
									<span onClick={() => setFormType('login')}>
										Авторизуетесь
									</span>
								</p>
								<Button>Далее</Button>
							</>
						)}
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth

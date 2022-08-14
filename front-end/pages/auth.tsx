import { NextPage } from 'next'
import React from 'react'

import Layout from '@/components/layout/Layout'

import Auth from '../app/screens/auth/Auth'


const AuthPage: NextPage = () => {
	return (
		<Layout>
			<Auth />
		</Layout>
	)
}

export default AuthPage

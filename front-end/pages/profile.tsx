import React from 'react'

import Layout from '@/components/layout/Layout'

import { NextPageAuth } from '../app/types/auth.types'


const ProfilePage: NextPageAuth = () => {
	return <Layout>Profile</Layout>
}

ProfilePage.isOnlyUser = true

export default ProfilePage

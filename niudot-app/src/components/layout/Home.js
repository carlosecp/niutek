import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import authContext from '../../context/auth/authContext'
import Page from '../pages/Page'
import Sidebar from './Sidebar'

const Home = () => {
	const [toggled, setToggled] = useState(false)

	const { isAuthenticated, user } = useContext(authContext)

	if (!isAuthenticated || !user) {
		return <Redirect to='/' />
	} else {
		if (user.type === 'admin') {
			return <Redirect to='/admin/register' />
		} else if (user.type === 'client') {
			return (
				<div className='h-full flex'>
					<Sidebar toggled={toggled} setToggled={setToggled} />
					<Page toggled={toggled} setToggled={setToggled} />
				</div>
			)
		}
	}
}

export default Home

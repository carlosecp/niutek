import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import authContext from '../../context/auth/authContext'
import AdminPage from './AdminPage'

const Admin = () => {
	const [toggled, setToggled] = useState(false)

	const { isAuthenticated, user } = useContext(authContext)

	if (!isAuthenticated || !user) {
		return <Redirect to='/' />
	} else {
		if (user.type === 'client') {
			return <Redirect to='/app/dashboard' />
		} else if (user.type === 'admin') {
			return (
				<div className='h-full flex'>
					<AdminSidebar toggled={toggled} setToggled={setToggled} />
					<AdminPage toggled={toggled} setToggled={setToggled} />
				</div>
			)
		}
	}
}

export default Admin

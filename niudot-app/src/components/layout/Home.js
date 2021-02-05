import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import AlertsState from '../../context/alerts/AlertsState'
import authContext from '../../context/auth/authContext'
import Page from '../pages/Page'
import Sidebar from './Sidebar'

const Home = () => {
	const [toggled, setToggled] = useState(false)

	const { isAuthenticated, user } = useContext(authContext)

	if (!isAuthenticated || !user) {
		return <Redirect to='/' />
	} else {
		return (
			<div className='h-full flex'>
				<Sidebar toggled={toggled} setToggled={setToggled} />
				<AlertsState>
					<Page toggled={toggled} setToggled={setToggled} />
				</AlertsState>
			</div>
		)
	}
}

export default Home

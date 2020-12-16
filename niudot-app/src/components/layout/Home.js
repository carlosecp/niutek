import React, { useEffect, useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import authContext from '../../context/auth/authContext'
import Page from '../pages/Page'
import Sidebar from './Sidebar'

function Home(props) {
	const [toggled, setToggled] = useState(false)

	const { isAuthenticated, loadUser } = useContext(authContext)

	//useEffect(() => {
	//loadUser()
	//if (!isAuthenticated) {
	//props.history.push('/')
	//}
	//}, [isAuthenticated])

	if (!isAuthenticated) {
		return <Redirect to='/' />
	}

	return (
		<div className='h-full flex'>
			<Sidebar toggled={toggled} setToggled={setToggled} />
			<Page toggled={toggled} setToggled={setToggled} />
		</div>
	)
}

export default Home

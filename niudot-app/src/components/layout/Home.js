import React, { useEffect, useContext, useState } from 'react'
import authContext from '../../context/auth/authContext'
import Page from '../pages/Page'
import Sidebar from './Sidebar'
import '../../assets/styles/styles.css'

function Home(props) {
	const [toggled, setToggled] = useState(false)

	const { isAuthenticated, loadUser } = useContext(authContext)

	useEffect(() => {
		loadUser()
		if (!isAuthenticated) {
			props.history.push('/login')
		}
		// eslint-disable-next-line
	}, [isAuthenticated])

	return (
		<>
			<Sidebar toggled={toggled} setToggled={setToggled} />
			<Page toggled={toggled} setToggled={setToggled} />
		</>
	)
}

export default Home

import React, { useState } from 'react'
import Page from '../pages/Page'
import Sidebar from './Sidebar'

function Home() {
	const [toggled, setToggled] = useState(false)

	return (
		<>
			<Sidebar toggled={toggled} setToggled={setToggled} />
			<Page toggled={toggled} setToggled={setToggled} />
		</>
	)
}

export default Home

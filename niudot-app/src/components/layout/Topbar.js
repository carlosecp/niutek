import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { sidebarContext } from '../../context/sidebar/SidebarState'
import pages from '../pages/pages'

function Topbar() {
	const location = useLocation()
	const dropdownOptions = [...pages.map((page) => page.dropdownOptions)]

	const { showSidebar, setShowSidebar } = useContext(sidebarContext)

	let options = [{ path: 'inicio', name: 'Inicio' }]
	dropdownOptions.forEach((optionsArray) => {
		optionsArray.forEach((option) => options.push(option))
	})

	const [currentPage] = options.filter(
		(option) => `/${option.path}` === location.pathname
	)

	return (
		<div className='topbar'>
			<h2>{currentPage.name}</h2>
			<div
				className='burger-menu'
				onClick={() => setShowSidebar(!showSidebar)}
			></div>
		</div>
	)
}

export default Topbar

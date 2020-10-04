import React from 'react'
import { useLocation } from 'react-router-dom'
import pages from '../pages/pages'

function Topbar() {
	const location = useLocation()
	const dropdownOptions = [...pages.map((page) => page.dropdownOptions)]

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
		</div>
	)
}

export default Topbar

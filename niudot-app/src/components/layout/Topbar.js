import React from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import { Redirect, useLocation } from 'react-router-dom'
import pages from '../pages/pages'

function Topbar({ toggled, setToggled }) {
	const location = useLocation()
	const dropdownOptions = [...pages.map((page) => page.dropdownOptions)]

	let options = [{ path: 'inicio', name: 'Inicio' }]
	dropdownOptions.forEach((optionsArray) => {
		optionsArray.forEach((option) => options.push(option))
	})

	const [currentPage] = options.filter(
		(option) => `/${option.path}` === location.pathname
	)

	if (!currentPage) {
		return <Redirect to='/login' />
	}

	return (
		<div className='fixed w-full h-16 flex items-center justify-between px-4 shadow-md bg-gray-100 text-black dark:bg-gray-darker-bg dark:text-white transition'>
			<h2 className='font-bold text-2xl'>{currentPage.name}</h2>
			<div className='burger-btn' onClick={() => setToggled(!toggled)}>
				<FaBars className='burger-menu w-6 h-6 hidden sm:block' />
			</div>
		</div>
	)
}

Topbar.propTypes = {
	toggled: PropTypes.bool.isRequired,
	setToggled: PropTypes.func.isRequired
}

export default Topbar

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
	ProSidebar,
	SidebarHeader,
	SidebarContent,
	Menu,
	MenuItem,
	SidebarFooter
} from 'react-pro-sidebar'

import { FaHome, FaMoon, FaSun } from 'react-icons/fa/index'
import pages from '../routing'
import SidebarSubMenu from './SidebarSubMenu'
import authContext from '../../context/auth/authContext'
import themeContext from '../../context/theme/themeContext'
import routesContext from '../../context/routes/routesContext'

function Sidebar({ toggled, setToggled }) {
	const { logout } = useContext(authContext)
	const { theme, toggleTheme } = useContext(themeContext)
	const { changePage } = useContext(routesContext)

	function handleLogout() {
		logout()
	}

	return (
		<ProSidebar
			className={`fixed w-64 shadow-md ${theme && 'dark'}`}
			breakPoint='sm'
			toggled={toggled}
			onToggle={setToggled}
		>
			<SidebarHeader className=''>
				<h2 className='font-bold text-2xl'>niudot.</h2>
			</SidebarHeader>
			<SidebarContent className=''>
				<Menu>
					<MenuItem icon={<FaHome />} className='sidebar-item'>
						Inicio
						<Link to='/inicio' onClick={() => changePage('inicio')} />
					</MenuItem>
					{pages.map((page) => (
						<SidebarSubMenu key={page.name} page={page} />
					))}
				</Menu>
			</SidebarContent>
			<SidebarFooter>
				<div
					className='w-14 h-8 bg-gray-200 rounded-full flex-shrink-0 p-1 dark:bg-gray-cstm-2 transition'
					onClick={toggleTheme}
				>
					<div
						className={`bg-white w-6 h-6 rounded-full shadow-md transition dark:bg-blue-700 transform flex justify-center items-center ${
							theme && 'translate-x-6'
						}`}
					>
						{theme ? (
							<FaMoon className='text-white fill-current' />
						) : (
							<FaSun className='text-blue-500 fill-current' />
						)}
					</div>
				</div>
				<button onClick={handleLogout} style={{ color: 'black' }}>
					Logout
				</button>
			</SidebarFooter>
		</ProSidebar>
	)
}

Sidebar.propTypes = {
	toggled: PropTypes.bool.isRequired,
	setToggled: PropTypes.func.isRequired
}

export default Sidebar

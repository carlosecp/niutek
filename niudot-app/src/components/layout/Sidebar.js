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
import pages from '../pages/pages'
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
					className='flex justify-center items-center gap-1 h-8 tw-text-accent cursor-pointer'
					onClick={toggleTheme}
				>
					{theme ? <FaSun /> : <FaMoon />}
					<p className='hover:underline'>
						{theme ? 'Modo Claro' : 'Modo Oscuro'}
					</p>
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

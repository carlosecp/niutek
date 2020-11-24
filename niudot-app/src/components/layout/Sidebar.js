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

import { FaHome } from 'react-icons/fa/index'
import pages from '../pages/pages'
import SidebarSubMenu from './SidebarSubMenu'
import authContext from '../../context/auth/authContext'
import '../../assets/pro-sidebar.css'

function Sidebar({ toggled, setToggled }) {
	const { logout } = useContext(authContext)

	function handleLogout() {
		logout()
	}

	return (
		<ProSidebar
			breakPoint='sm'
			className='fixed'
			toggled={toggled}
			onToggle={setToggled}
		>
			<SidebarHeader className='tw-sidebar flex-col-center'>
				<h2 className='font-bold text-2xl'>niudot.</h2>
			</SidebarHeader>
			<SidebarContent className='tw-sidebar bg-gray-200'>
				<Menu>
					<MenuItem icon={<FaHome />} className='sidebar-item'>
						Inicio
						<Link to='/inicio' />
					</MenuItem>
					{pages.map((page) => (
						<SidebarSubMenu key={page.name} page={page} />
					))}
				</Menu>
			</SidebarContent>
			<SidebarFooter>
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

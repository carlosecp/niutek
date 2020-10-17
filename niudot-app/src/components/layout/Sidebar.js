import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
	ProSidebar,
	SidebarHeader,
	SidebarContent,
	Menu,
	MenuItem
} from 'react-pro-sidebar'

import { FaHome } from 'react-icons/fa/index'
import pages from '../pages/pages'
import SidebarSubMenu from './SidebarSubMenu'

function Sidebar({ toggled, setToggled }) {
	return (
		<ProSidebar breakPoint='sm' toggled={toggled} onToggle={setToggled}>
			<SidebarHeader>
				<h2>niudot.</h2>
			</SidebarHeader>
			<SidebarContent>
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
		</ProSidebar>
	)
}

Sidebar.propTypes = {
	toggled: PropTypes.bool.isRequired,
	setToggled: PropTypes.func.isRequired
}

export default Sidebar

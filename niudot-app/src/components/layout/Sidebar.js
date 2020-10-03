import React from 'react'
import { Link } from 'react-router-dom'
import {
	ProSidebar,
	SidebarHeader,
	SidebarContent,
	Menu,
	MenuItem,
} from 'react-pro-sidebar'
import { FaHome } from 'react-icons/fa/index'
import pages from '../pages/pages'
import SidebarSubMenu from './SidebarSubMenu'

function Sidebar() {
	return (
		<ProSidebar breakPoint='sm'>
			<SidebarHeader>
				<h2>niudot.</h2>
			</SidebarHeader>
			<SidebarContent>
				<Menu>
					<MenuItem icon={<FaHome />} className='sidebar-item'>
						Inicio
						<Link to='/inicio'/>
					</MenuItem>
					{pages.map((page) => (
						<SidebarSubMenu page={page}/>
					))}
				</Menu>
			</SidebarContent>
		</ProSidebar>
	)
}

export default Sidebar

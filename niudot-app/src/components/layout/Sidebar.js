import React from 'react'
import { Link } from 'react-router-dom'
import {
	ProSidebar,
	SidebarHeader,
	SidebarContent,
	Menu,
	MenuItem,
	SubMenu
} from 'react-pro-sidebar'
import { FaHome } from 'react-icons/fa/index'
import pages from '../pages/pages'

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
						<SubMenu
							title={page.name}
							icon={page.icon}
							className='sidebar-item'
						>
							{page.dropdownOptions.map((option) => (
								<MenuItem>
									{option.name}
									<Link to={`/${option.path}`} />
								</MenuItem>
							))}
						</SubMenu>
					))}
				</Menu>
			</SidebarContent>
		</ProSidebar>
	)
}

export default Sidebar

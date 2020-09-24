import React, { useState } from 'react'
import SidebarItem from './SidebarItem'
import pages from '../../pages/pages'
import { FaHome } from 'react-icons/fa/index'
import { Link } from 'react-router-dom'

function Sidebar() {
	const [activedDropdown, setActiveDropdown] = useState('')

	function toggleDropwdown(dropdownToOpen) {
		if (dropdownToOpen !== 'Inicio') {
			setActiveDropdown(dropdownToOpen)
		}
	}

	return (
		<div className='sidebar-container'>
			<h2 className='sidebar-logo'>niudot.</h2>
			<nav className='sidebar-nav'>
				<ul>
					<Link to='/inicio'>
						<li className='sidebar-list-item rounded'>
							<div className='sidebar-list-item-info'>
								<FaHome className='sidebar-item-icon' />
								Inicio
							</div>
						</li>
					</Link>
					{pages.map((page) => (
						<SidebarItem
							key={page.name}
							name={page.name}
							iconCode={page.iconCode}
							dropdownOptions={page.dropdownOptions}
							isDropdownActive={activedDropdown === page.name ? true : false}
							toggleDropdown={toggleDropwdown}
						/>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Sidebar

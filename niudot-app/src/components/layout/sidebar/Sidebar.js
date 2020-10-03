import React, { useState, useEffect, useContext } from 'react'
import SidebarItem from './SidebarItem'
import pages from '../../pages/pages'
import { FaHome } from 'react-icons/fa/index'
import { Link } from 'react-router-dom'
import { sidebarContext } from '../../../context/sidebar/SidebarState'

function Sidebar() {
	const [activedDropdown, setActiveDropdown] = useState('')
	const { showSidebar, setShowSidebar } = useContext(sidebarContext)

	useEffect(() => {
		if (window.innerWidth >= 576) {
			setShowSidebar(false)
		}
	}, [setShowSidebar])

	function toggleDropwdown(dropdownToOpen) {
		if (dropdownToOpen !== 'Inicio') {
			setActiveDropdown(dropdownToOpen)
		}
	}

	return (
		<div className={`sidebar-container ${showSidebar || 'sidebar-hide'}`}>
			<h2 className='sidebar-logo'>niudot.</h2>
			<nav className='sidebar-nav'>
				<ul>
					<Link to='/inicio' onClick={() => setActiveDropdown('inicio')}>
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

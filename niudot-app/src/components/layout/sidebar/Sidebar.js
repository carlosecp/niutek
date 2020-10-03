import React from 'react'
import { Link } from 'react-router-dom'
import {
	ProSidebar,
	SubMenu,
	SidebarContent,
	SidebarHeader,
	Menu,
	MenuItem
} from 'react-pro-sidebar'
import {
	FaHome,
	FaCashRegister,
	FaUsers,
	FaPiggyBank,
	FaCreditCard,
	FaChartBar,
	FaReceipt,
	FaCircle,
	FaChevronCircleDown
} from 'react-icons/fa/index'

function Sidebar() {
	return (
		<ProSidebar>
			<SidebarHeader>
				<h2>niudot.</h2>
			</SidebarHeader>
			<SidebarContent className='sidebar-nav'>
				<Menu>
					<MenuItem icon={<FaHome />} className='sidebar-list-item rounded'>
						Inicio
					</MenuItem>
					<SubMenu
						title='Caja'
						icon={<FaCashRegister />}
						className='sidebar-list-item rounded'
					>
						<MenuItem>1</MenuItem>
						<MenuItem>2</MenuItem>
						<MenuItem>3</MenuItem>
					</SubMenu>
				</Menu>
			</SidebarContent>
		</ProSidebar>
	)
}

{
	/* <li className='sidebar-list-item rounded'>
								<div className='sidebar-list-item-info'>
									<FaHome className='sidebar-item-icon' />
									Inicio
								</div>
							</li> */
}

export default Sidebar

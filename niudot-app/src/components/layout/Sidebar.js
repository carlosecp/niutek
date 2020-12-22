import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
	ProSidebar,
	SidebarHeader,
	SidebarContent,
	Menu,
	MenuItem,
	SidebarFooter
} from 'react-pro-sidebar'

import { FaCog, FaHome, FaMoon, FaSun } from 'react-icons/fa/index'
import pages from '../pages'
import SidebarSubMenu from './SidebarSubMenu'
import authContext from '../../context/auth/authContext'
import themeContext from '../../context/theme/themeContext'
import routesContext from '../../context/routes/routesContext'

function Sidebar({ toggled, setToggled }) {
	const { changePage } = useContext(routesContext)
	const { theme } = useContext(themeContext)
	const [openSettings, setOpenSettings] = useState(false)

	useEffect(() => {
		return () => {
			setOpenSettings(false)
		}
	}, [toggled])

	return (
		<ProSidebar
			className={`fixed w-64 shadow-md ${theme && 'dark'}`}
			breakPoint='sm'
			toggled={toggled}
			onToggle={setToggled}
		>
			<SidebarHeader>
				<h2 className='font-bold text-2xl'>niudot.</h2>
			</SidebarHeader>
			<SidebarContent onClick={() => setOpenSettings(false)}>
				<Menu>
					<MenuItem icon={<FaHome />} className='sidebar-item'>
						Inicio
						<Link to='/app/dashboard' onClick={() => changePage('inicio')} />
					</MenuItem>
					{pages.map((page) => (
						<SidebarSubMenu key={page.name} page={page} />
					))}
				</Menu>
			</SidebarContent>
			<SidebarFooter className='h-14 p-3 flex items-center justify-end relative'>
				<div
					className={`text-blue-700 rounded-full bg-white-gray p-2 cursor-pointer dark:text-blue-500 transition transform ${
						openSettings && 'rotate-45'
					}`}
					onClick={() => setOpenSettings(!openSettings)}
				>
					<FaCog className='fill-current' size={20} />
				</div>
				{openSettings && <SettingsMenu />}
			</SidebarFooter>
		</ProSidebar>
	)
}

function ThemeSwitch() {
	const { theme, toggleTheme } = useContext(themeContext)

	return (
		<div
			className='w-14 h-8 bg-gray-200 rounded-full flex-shrink-0 p-1 dark:bg-gray-cstm-3 transition justify-self-center'
			onClick={toggleTheme}
		>
			<div
				className={`bg-white w-6 h-6 rounded-full shadow-md transition dark:bg-blue-500 transform flex justify-center items-center ${
					theme && 'translate-x-6'
				}`}
			>
				{theme ? (
					<FaMoon className='text-white fill-current' />
				) : (
					<FaSun className='text-blue-700 fill-current' />
				)}
			</div>
		</div>
	)
}

function SettingsMenu() {
	const { logout } = useContext(authContext)

	return (
		<div className='absolute bottom-14 w-full'>
			<div className='transition rounded p-2 w-10/12 bg-white-gray mx-auto shadow-md'>
				<div className='flex flex-col items-center justify-center gap-2'>
					<ThemeSwitch />
					<strong
						className='text-blue-700 dark:text-blue-500 hover:underline cursor-pointer select-none'
						onClick={() => logout()}
					>
						Logout
					</strong>
				</div>
			</div>
		</div>
	)
}

export default Sidebar

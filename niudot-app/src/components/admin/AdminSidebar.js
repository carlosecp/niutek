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
import {
	FaAddressBook,
	FaCog,
	FaMoon,
	FaSun,
	FaUserPlus
} from 'react-icons/fa/index'
import authContext from '../../context/auth/authContext'
import themeContext from '../../context/theme/themeContext'

const Sidebar = ({ toggled, setToggled }) => {
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
					<MenuItem icon={<FaUserPlus />} className='sidebar-item'>
						Registrar Usuario
						<Link to='/admin/register' />
					</MenuItem>
					<MenuItem icon={<FaAddressBook />} className='sidebar-item'>
						Crear Nuevo Perfil
						<Link to='/admin/profile' />
					</MenuItem>
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

const ThemeSwitch = () => {
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

const SettingsMenu = () => {
	const { logout } = useContext(authContext)

	return (
		<div className='absolute bottom-14 w-full'>
			<div className='transition rounded p-2 ml-6 bg-white-gray shadow-md'>
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

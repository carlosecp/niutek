import React, { useState } from 'react'
import SidebarItem from './SidebarItem'

const pages = [
	{
		name: 'Inicio',
		iconCode: 'FaHome',
		dropdownOptions: [
			{ path: 'clientes/persona-natural', name: 'Persona Natural' },
			{ path: 'clientes/persona-juridica', name: 'Persona Juridica' }
		]
	},
	{
		name: 'Caja',
		iconCode: 'FaCashRegister',
		dropdownOptions: [
			{ path: 'clientes/persona-natural', name: 'Persona Natural' },
			{ path: 'clientes/persona-juridica', name: 'Persona Juridica' }
		]
	},
	{
		name: 'Clientes',
		iconCode: 'FaUsers',
		dropdownOptions: [
			{ path: 'clientes/persona-natural', name: 'Persona Natural' },
			{ path: 'clientes/persona-juridica', name: 'Persona Juridica' }
		]
	},
	{
		name: 'Ahorros',
		iconCode: 'FaPiggyBank',
		dropdownOptions: [
			{ path: 'clientes/persona-natural', name: 'Persona Natural' },
			{ path: 'clientes/persona-juridica', name: 'Persona Juridica' }
		]
	},
	{
		name: 'Reportes',
		iconCode: 'FaChartBar',
		dropdownOptions: [
			{ path: 'clientes/persona-natural', name: 'Persona Natural' },
			{ path: 'clientes/persona-juridica', name: 'Persona Juridica' }
		]
	},
	{
		name: 'Cobranza',
		iconCode: 'FaReceipt',
		dropdownOptions: [
			{ path: 'clientes/persona-natural', name: 'Persona Natural' },
			{ path: 'clientes/persona-juridica', name: 'Persona Juridica' }
		]
	},
	{
		name: 'Productos',
		iconCode: 'FaChevronCircleDown',
		dropdownOptions: [
			{ path: 'clientes/persona-natural', name: 'Persona Natural' },
			{ path: 'clientes/persona-juridica', name: 'Persona Juridica' }
		]
	},
	{
		name: 'Crédito',
		iconCode: 'FaCreditCard',
		dropdownOptions: [
			{ path: 'clientes/persona-natural', name: 'Persona Natural' },
			{ path: 'clientes/persona-juridica', name: 'Persona Juridica' }
		]
	}
]

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
					{pages.map((page) => (
						<SidebarItem
							key={page.path}
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

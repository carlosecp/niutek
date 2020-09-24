import React from 'react'
import SidebarIcon from './SidebarIcon'
import DropdownMenu from './DropwdownMenu'

function SidebarItems({
	name,
	iconCode,
	dropdownOptions,
	isDropdownActive,
	toggleDropdown
}) {
	function handleDropdownActivation() {
		if (name === 'Inicio') {
			toggleDropdown('')
		}
		const activeDropdown = isDropdownActive ? '' : name
		toggleDropdown(activeDropdown)
	}

	return (
		<>
			<li
				className={`sidebar-list-item rounded ${
					isDropdownActive && 'is-active'
				}`}
				onClick={handleDropdownActivation}
			>
				<div className='sidebar-list-item-info'>
					<SidebarIcon iconCode={iconCode} />
					{name}
				</div>
			</li>
			{isDropdownActive && <DropdownMenu dropdownOptions={dropdownOptions} />}
		</>
	)
}

export default SidebarItems

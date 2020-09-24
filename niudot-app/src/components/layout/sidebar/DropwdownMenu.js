import React from 'react'
import DropdownMenuItem from './DropwdownMenuItem'

function DropdownMenu({ dropdownOptions }) {
	return (
		<ul className='sidebar-dropdown-menu rounded'>
			{dropdownOptions.map((option) => (
				<DropdownMenuItem path={option.path} name={option.name} />
			))}
		</ul>
	)
}

export default DropdownMenu

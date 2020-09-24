import React, {useState} from 'react'
import {FaAngleRight} from 'react-icons/fa'

function DropdownMenu({options}) {
	return (
		<div className='dropdown-menu rounded'>
			{options.map(option => (
				<DropdownMenuItem option={option}/>
			))}
		</div>
	)
}

function DropdownMenuItem({option}) {
	const [isActive, setIsActive] = useState(false)

	function toggleActive() {
		setIsActive(!isActive)
	}

	return (
		<div className={`dropdown-menu-option rounded ${isActive && 'dropdown-option-active'}`} 	onClick={toggleActive}>
			<FaAngleRight style={{marginRight: '0.25rem'}}/>
			{option}
		</div>
	)
}

export default DropdownMenu

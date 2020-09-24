import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

function DropdownMenuItem({ path, name }) {
	const [isActive, setIsActive] = useState(false)

	function toggleActive() {
		setIsActive(!isActive)
	}

	return (
		<Link to={`/${path}`}>
			<div
				className={`sidebar-dropdown-item rounded ${
					isActive && 'dropdown-option-active'
				}`}
				onClick={toggleActive}
			>
				<FaAngleRight style={{ marginRight: '0.25rem' }} />
				{name}
			</div>
		</Link>
	)
}

export default DropdownMenuItem

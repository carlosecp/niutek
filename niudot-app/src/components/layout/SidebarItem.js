import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import SidebarIcon from './SidebarIcon'
import DropdownMenu from './DropwdownMenu'

function SidebarItems({page: {path, iconCode, dropdownOptions}}) {
	const [showDropdown, setShowDropdown] = useState(false) 

	function toggleDropdown() {
		setShowDropdown(!showDropdown)
	}

	return (
		<>
			<li className={`rounded navbar-list-item ${showDropdown && 'active'}`} onClick={toggleDropdown}>
				<Link to={`/${path.toLowerCase()}`} style={{display: 'flex', alignItems: 'center'}}>
					<SidebarIcon iconCode={iconCode}/>
						{path}
				</Link>
			</li>
			{showDropdown && <DropdownMenu options={dropdownOptions}/>}
	</>
	)
}

export default SidebarItems

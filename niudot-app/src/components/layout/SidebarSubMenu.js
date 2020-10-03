import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem, SubMenu } from 'react-pro-sidebar'

function SidebarSubMenu({ page }) {
	const [isToggled, setIsToggled] = useState(false)

	return (
		<SubMenu
			title={page.name}
			icon={page.icon}
			className={`sidebar-item`}
			onClick={() => console.log('Hello World')}
		>
			{page.dropdownOptions.map((option) => (
				<MenuItem>
					{option.name}
					<Link to={`/${option.path}`} />
				</MenuItem>
			))}
		</SubMenu>
	)
}

export default SidebarSubMenu

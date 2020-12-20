import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem, SubMenu } from 'react-pro-sidebar'
import routesContext from '../../context/routes/routesContext'

function SidebarSubMenu({ page }) {
	const { changePage } = useContext(routesContext)

	return (
		<SubMenu title={page.name} icon={page.icon}>
			{page.dropdownOptions.map((option) => (
				<MenuItem key={option.name}>
					{option.name}
					<Link to={`/${option.path}`} />
				</MenuItem>
			))}
		</SubMenu>
	)
}

export default SidebarSubMenu

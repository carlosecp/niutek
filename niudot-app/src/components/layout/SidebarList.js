import React from 'react'
import SidebarElement from './SidebarElement'
import icons from './SidebarIcons'

function SidebarList({ childs }) {
	return (
		<ul className='navbar-list'>
			{Object.keys(icons).map((name, index) => (
				<SidebarElement key={index} name={name} component={icons[name]} />
			))}
		</ul>
	)
}

export default SidebarList

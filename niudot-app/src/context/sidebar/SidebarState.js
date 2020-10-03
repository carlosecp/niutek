import React, { useState, createContext } from 'react'

const sidebarContext = createContext()

function SidebarState(props) {
	const [showSidebar, setShowSidebar] = useState(false)

	return (
		<sidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
			{props.children}
		</sidebarContext.Provider>
	)
}

export { sidebarContext }
export default SidebarState

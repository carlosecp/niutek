import * as React from 'react'
import Sidebar from './Sidebar'

interface Context {
	showSidebar: boolean
	toggleSidebar: () => void
}

export const sidebarCtx = React.createContext<Context | null>(null)

interface Props {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	const [showSidebar, setShowSidebar] = React.useState(false)

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	return (
		<sidebarCtx.Provider value={{ showSidebar, toggleSidebar }}>
			<Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
			{children}
		</sidebarCtx.Provider>
	)
}

export default Layout

import { useState, createContext, ReactNode } from 'react'
import Sidebar from './Sidebar'

interface Context {
	showSidebar: boolean
	toggleSidebar: () => void
}

export const sidebarCtx = createContext<Context>(null)

interface Props {
	children: ReactNode
}

const Layout = ({ children }: Props) => {
	const [showSidebar, setShowSidebar] = useState(false)

	const toggleSidebar = () => {
		console.log(showSidebar)
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

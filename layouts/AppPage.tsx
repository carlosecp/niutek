import * as React from 'react'
import Meta from '@/components/Meta'
import Sidebar from './Sidebar'

export interface SidebarContext {
	showSidebar: boolean
	toggleSidebar: () => void
}

export const sidebarCtx = React.createContext<SidebarContext | null>(null)

interface Props {
	title: string
	children: React.ReactNode
}

const Layout = ({ title, children }: Props) => {
	const [showSidebar, setShowSidebar] = React.useState(false)

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar)
	}

	return (
		<>
			<Meta title={title} />
			<sidebarCtx.Provider value={{ showSidebar, toggleSidebar }}>
				<Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
				{children}
			</sidebarCtx.Provider>
		</>
	)
}

export default Layout

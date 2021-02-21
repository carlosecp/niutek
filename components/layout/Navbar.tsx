import * as React from 'react'
import { sidebarCtx } from '../layout/Layout'
import { FaBars, FaPlus, FaSearch } from 'react-icons/fa'

interface Props {
	loading: boolean
	title: string
	onReset: () => void
	setEditingExisting: (x: boolean) => void
	toggleNavigation: () => void
}

const Navbar = (props: Props) => {
	const { toggleSidebar } = React.useContext(sidebarCtx)

	return (
		<header className="sticky top-0 z-10 flex flex-col lg:mr-64">
			<div className="h-14 bg-white border-b flex items-center px-2">
				<button
					type="button"
					className="block sm:hidden text-indigo-700 mx-2"
					onClick={toggleSidebar}
				>
					<FaBars size={20} />
				</button>
				<h1 className="font-medium text-lg">{props.title}</h1>
				<div className="ml-auto flex gap-2">
					<button
						className="block lg:hidden h-9 btn btn-outline-primary"
						onClick={props.toggleNavigation}
					>
						<FaSearch className="fill-current" />
					</button>
					<button
						className="h-9 btn btn-outline-primary"
						onClick={() => {
							props.setEditingExisting(false)
							props.onReset()
						}}
						disabled={props.loading}
					>
						<p className="hidden sm:block mr-1">Nuevo</p>
						<FaPlus className="fill-current" />
					</button>
				</div>
			</div>
		</header>
	)
}

export default Navbar

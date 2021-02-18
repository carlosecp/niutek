import { useContext } from 'react'
import { sidebarCtx } from '../layout/Layout'
import { FaBars, FaPlus } from 'react-icons/fa'

const Navbar = () => {
	const { toggleSidebar } = useContext(sidebarCtx)

	return (
		<header className='sticky top-0 z-10 flex flex-col lg:mr-64'>
			<div className='h-14 bg-white border-b flex items-center px-2'>
				<button
					type='button'
					className='block sm:hidden text-indigo-700 mx-2'
					onClick={toggleSidebar}
				>
					<FaBars size={20} />
				</button>
				<button className='h-9 btn btn-outline-primary'>
					<p className='hidden sm:block mr-1'>Nuevo</p>
					<FaPlus className='fill-current' />
				</button>
			</div>
		</header>
	)
}

export default Navbar

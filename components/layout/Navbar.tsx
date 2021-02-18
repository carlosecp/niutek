import { useState, useContext, ChangeEvent, FormEvent } from 'react'
import { FaBars, FaCheck, FaPlus, FaSearch } from 'react-icons/fa'
import { sidebarCtx } from '../layout/Layout'

interface Props {
	title: string
}

const Navbar = ({ title }: Props) => {
	const { toggleSidebar } = useContext(sidebarCtx)

	const [text, setText] = useState('')

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(text)
	}

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value)
	}

	return (
		<header className='sticky top-0 z-10'>
			<div className='h-14 bg-white border-b flex items-center px-2'>
				<button
					type='button'
					className='block sm:hidden text-indigo-700 mx-2'
					onClick={toggleSidebar}
				>
					<FaBars size={20} />
				</button>
				<form
					className='flex-1 h-full flex items-center'
					onSubmit={onSubmit}
				>
					<button type='submit' className='p-2'>
						<FaSearch className='text-gray-600 fill-current' />
					</button>
					<input
						type='text'
						className='w-full border-none outline-none ring-0 focus:ring-0'
						placeholder={`Buscar ${title.toLowerCase()}`}
						onChange={onChange}
					/>
				</form>
				<button className='h-9 mr-2 w-max inline-flex items-center px-4 py-2 border border-primary rounded-md shadow-sm text-sm font-medium text-primary hover:text-white hover:border-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary btn-disabled transition'>
					<p className='hidden sm:block mr-1'>Guardar</p>
					<FaCheck className='fill-current' />
				</button>
				<button className='h-9 w-max inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary btn-disabled transition'>
					<p className='hidden sm:block mr-1'>Nuevo</p>
					<FaPlus className='fill-current' />
				</button>
			</div>
		</header>
	)
}

export default Navbar

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'
import themeContext from '../../context/theme/themeContext'

function Navbar({ prompt, tag, path }) {
	const { theme, toggleTheme } = useContext(themeContext)

	return (
		<div className='fixed w-full bg-white dark:bg-gray-cstm-1'>
			<div className='max-w-screen-xl h-24 px-8 flex items-center justify-between mx-auto'>
				<h1 className='text-black-white text-2xl font-bold'>niudot</h1>
				<div className='text-black-white flex items-center'>
					<span className='sm:hidden'>{prompt}</span>
					<Link to='/register'>
						<span className='ml-2 mr-6 font-bold cursor-pointer hover:underline text-blue-blue'>
							{tag}
						</span>
					</Link>

					<div
						className='w-14 h-8 bg-gray-200 rounded-full flex-shrink-0 p-1 dark:bg-gray-cstm-2 transition'
						onClick={toggleTheme}
					>
						<div
							className={`bg-white w-6 h-6 rounded-full shadow-md transition dark:bg-blue-700 transform flex justify-center items-center ${
								theme && 'translate-x-6'
							}`}
						>
							{theme ? (
								<FaMoon className='text-white fill-current' />
							) : (
								<FaSun className='text-blue-700 fill-current' />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar

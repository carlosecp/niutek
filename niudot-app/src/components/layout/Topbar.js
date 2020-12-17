import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import routesContext from '../../context/routes/routesContext'

function Topbar({ toggled, setToggled }) {
	const { currentPage } = useContext(routesContext)

	return (
		<div className='z-10 fixed w-full'>
			<div className='h-16 flex items-center justify-between px-4 bg-white-gray'>
				<h2 className='text-black-white font-bold text-2xl'>
					{currentPage.charAt(0).toUpperCase() +
						currentPage.slice(1, currentPage.length)}
				</h2>
<<<<<<< HEAD
				<div className='burger-btn' onClick={() => setToggled(!toggled)}>
					<FaBars className='w-6 h-6 hidden sm:block dark:text-white dark:fill-current' />
=======
				<div className='' onClick={() => setToggled(!toggled)}>
					<FaBars className='w-6 h-6 hidden cstm:block dark:text-white dark:fill-current' />
>>>>>>> 961fc222f7961d1d9ef860808ad096851f0c8f60
				</div>
			</div>
			<div
				className='w-full bg-gray-200 dark:bg-gray-cstm-2'
				style={{ height: '2px' }}
			></div>
		</div>
	)
}

Topbar.propTypes = {
	toggled: PropTypes.bool.isRequired,
	setToggled: PropTypes.func.isRequired
}

export default Topbar

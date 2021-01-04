import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FaBars } from 'react-icons/fa'
import routesContext from '../../context/routes/routesContext'

const Topbar = ({ toggled, setToggled }) => {
	const { currentPage } = useContext(routesContext)

	return (
		<div className='z-10 fixed w-full'>
			<div className='h-16 flex items-center justify-between px-4 bg-white-gray'>
				<h2 className='text-black-white font-bold text-2xl'>
					{currentPage.charAt(0).toUpperCase() +
						currentPage.slice(1, currentPage.length)}
				</h2>
				<div className='cursor-pointer' onClick={() => setToggled(!toggled)}>
					<FaBars className='w-6 h-6 hidden cstm:block dark:text-white dark:fill-current' />
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

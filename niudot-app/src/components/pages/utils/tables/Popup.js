import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Popup = ({ children, togglePopup }) => {
	return (
		<div
			className='py-16 z-20 fixed w-screen h-screen top-0 left-0 pl-64 cstm:pl-0'
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
		>
			<div className='mx-auto px-4 max-h-full relative p-4 overflow-y-scroll bg-white dark:bg-gray-cstm-1 hide-scrollbar rounded shadow-md max-w-2xl'>
				<div className='flex justify-end'>
					<div
						className='absolute top-4 right-4 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white p-2 cursor-pointer transition'
						onClick={togglePopup}
					>
						<FaTimes size={20} className='fill-current' />
					</div>
				</div>
				<div className='pt-2'>{children}</div>
			</div>
		</div>
	)
}

export default Popup

import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Popup = ({ children, togglePopup }) => {
	return (
		<div
			className='z-20 fixed w-screen h-screen flex justify-center items-center top-0 left-0'
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
		>
			<div className='bg-white rounded m-4 relative'>
				<div className='flex justify-end p-4'>
					<div
						className='absolute top-4 right-4 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white p-2 cursor-pointer transition'
						onClick={togglePopup}
					>
						<FaTimes size={20} className='fill-current' />
					</div>
				</div>
				<div>{children}</div>
			</div>
		</div>
	)
}

export default Popup

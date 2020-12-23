import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Popup = ({ children, togglePopup }) => {
	return (
		<div
			className='z-20 absolute w-screen h-screen flex justify-center items-center top-0 left-0'
			style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
		>
			<div className='w-72 h-72 bg-white rounded'>
				<div className='ml-auto p-2' onClick={togglePopup}>
					<FaTimes />
				</div>
				{children}
			</div>
		</div>
	)
}

export default Popup

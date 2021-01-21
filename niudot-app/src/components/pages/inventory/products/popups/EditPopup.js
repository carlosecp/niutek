// React and Router Stuff
import React from 'react'
// Extra libraries
import Popup from '../../../utils/tables/Popup'

const EditPopup = ({ togglePopup }) => {
	return (
		<Popup togglePopup={togglePopup}>
			<form className='section py-16 mt-8'>
				<h2 className='text-black-white text-xl font-bold'>
					Eliminar Artículo
				</h2>
				<button className='btn flex items-center bg-red-400 btn-border-blue'>
					Eliminar
				</button>
			</form>
		</Popup>
	)
}

export default EditPopup

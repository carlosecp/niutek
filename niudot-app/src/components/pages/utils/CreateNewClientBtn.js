// React and Router Stuff
import React from 'react'

const CreateNewClientBtn = ({ setShowForm }) => {
	const handleCreateUserSubmit = () => {
		setShowForm(false)
	}

	return (
		<div className='section'>
			<div className=''>
				<h2 className='text-black-white font-bold text-xl'>
					Crear Un Nuevo Cliente
				</h2>
				<p className=''>Registra un nuevo cliente.</p>
			</div>
			<button className='' onClick={handleCreateUserSubmit}>
				Registrar un nuevo cliente
			</button>
		</div>
	)
}

export default CreateNewClientBtn

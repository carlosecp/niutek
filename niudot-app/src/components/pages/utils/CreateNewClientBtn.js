// React and Router Stuff
import React from 'react'

const CreateNewClientBtn = ({ setCreateClient }) => {
	const handleCreateUserSubmit = () => {
		setCreateClient(true)
	}

	return (
		<div className='section'>
			<div className=''>
				<h2 className='text-black-white font-bold text-xl'>
					Crear Un Nuevo Cliente
				</h2>
				<p className='text-gray-gray'>Registra un nuevo cliente.</p>
			</div>
			<button
				className='mt-4 btn bg-blue-blue btn-border-blue'
				onClick={handleCreateUserSubmit}
			>
				Registrar un nuevo cliente
			</button>
		</div>
	)
}

export default CreateNewClientBtn

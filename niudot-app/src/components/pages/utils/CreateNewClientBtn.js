import React from 'react'

function CreateNewClientBtn({ setShowForm }) {
	function handleCreateUserSubmit() {
		setShowForm(false)
	}

	return (
		<div className=''>
			<div className=''>
				<h2>Crear Un Nuevo Cliente</h2>
				<p className=''>Registra un nuevo cliente.</p>
			</div>
			<form className='' onSubmit={handleCreateUserSubmit}>
				<button className=''>Registrar un nuevo cliente</button>
			</form>
		</div>
	)
}

export default CreateNewClientBtn

import React from 'react'

function CreateNewClientBtn({setShowForm}) {
	function handleCreateUserSubmit() {
		setShowForm(false)
	}

	return (
		<div className='form'>
			<div className="form-title-container">
				<h2>Crear Un Nuevo Cliente</h2>
				<p className="form-description">Registra un nuevo cliente.</p>
			</div>
			<form className="form-container" onSubmit={handleCreateUserSubmit}>
				<button className="form-field-lg btn form-btn-primary rounded">Registrar un nuevo cliente</button>
			</form>
		</div>
	)
}

export default CreateNewClientBtn

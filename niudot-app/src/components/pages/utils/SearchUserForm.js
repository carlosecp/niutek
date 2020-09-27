import React, { useState } from 'react'

function SearchForm() {
	const [userName, setUserName] = useState('')

	function handleUserNameInput(event) {
		setUserName(event.target.value)
	}

	function handleUserNameSubmit(event) {
		event.preventDefault()

		// ! Eliminar
		console.log('Aca le envio el nombre de usuario al backend: ', userName)
		
		setUserName('')
	}

	return (
		<div className='form'>
			<div className='form-title-container'>
				<h2>Buscar Cliente Existente</h2>
				<p className='form-description'>
					Buscar entre los clientes registrados.
				</p>
			</div>
			<form className='form-container' onSubmit={handleUserNameSubmit}>
				<div className='form-field-lg'>
					<input type='text' className='std-input rounded-l' placeholder='Nombre del Cliente' onChange={handleUserNameInput} value={userName}/>
					<button className='btn input-btn-primary rounded-r'></button>
				</div>
			</form>
		</div>
	)
}

export default SearchForm

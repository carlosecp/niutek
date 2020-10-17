import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchForm() {
	const [userName, setUserName] = useState('')

	function handleUserNameInput(event) {
		setUserName(event.target.value)
	}

	function handleUserNameSubmit(event) {
		event.preventDefault()

		console.log(
			'%c SUCESS ' +
				'%c - Username: ' +
				`%c${userName}` +
				'%c sent to backend ',
			'color: white; font-weight: bold; background-color: green;',
			'color: white;',
			'color: white;  font-style: italic; text-decoration: underline;',
			'color: white;'
		)

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
				<div className='form-field-lg search-input'>
					<input
						type='text'
						className='std-input rounded-l'
						placeholder='Nombre del Cliente'
						onChange={handleUserNameInput}
						value={userName}
					/>
					<button className='btn input-btn-primary rounded-r'>
						<FaSearch />
					</button>
				</div>
			</form>
		</div>
	)
}

export default SearchForm

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchForm() {
	const [userName, setUserName] = useState('')

	function handleUserNameInput(event) {
		setUserName(event.target.value)
	}

	function handleUserNameSubmit(event) {
		event.preventDefault()
		setUserName('')
	}

	return (
		<div className='section'>
			<h2 className='text-black-white font-bold text-xl'>
				Buscar Cliente Existente
			</h2>
			<p className='text-gray-gray'>Buscar entre los clientes registrados.</p>
			<form className='mt-2' onSubmit={handleUserNameSubmit}>
				<div className='flex items-center gap-2'>
					<input
						type='text'
						className='form-field w-72'
						placeholder='Nombre del Cliente'
						onChange={handleUserNameInput}
						value={userName}
					/>
					<button className='w-10 h-10 bg-blue-blue rounded flex justify-center items-center'>
						<FaSearch />
					</button>
				</div>
			</form>
		</div>
	)
}

export default SearchForm

// React and Router Stuff
import React, { useState } from 'react'
// Extra libraries
import { FaSearch } from 'react-icons/fa'

const SearchForm = () => {
	const [userName, setUserName] = useState('')

	const handleUserNameInput = (event) => {
		setUserName(event.target.value)
	}

	const handleUserNameSubmit = (event) => {
		event.preventDefault()
		setUserName('')
	}

	return (
		<div className='section'>
			<h2 className='text-black-white font-bold text-xl'>Buscar En Catalogo</h2>
			<p className='text-gray-gray'>
				Buscar segun el nombre del producto o nombre abreviado.
			</p>
			<form className='mt-2' onSubmit={handleUserNameSubmit}>
				<div className='flex items-center gap-2'>
					<input
						type='text'
						className='form-field w-72'
						placeholder='Nombre del Producto'
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

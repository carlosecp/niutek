import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchProductForm() {
	const [checkName, setCheckName] = useState('')

	function handleCheckNameInput(event) {
		setCheckName(event.target.value)
	}

	function handleCheckNameSubmit(event) {
		event.preventDefault()
		setCheckName('')
	}

	return (
		<div className='pb-8'>
			<h2 className='text-black-white font-bold text-xl'>
				Buscar Producto Existente
			</h2>
			<p className='text-gray-gray'>Buscar entre los productos registrados.</p>
			<form className='mt-2' onSubmit={handleCheckNameSubmit}>
				<div className='flex items-center gap-2'>
					<input
						type='text'
						className='form-field w-72'
						placeholder='Nombre del Producto'
						onChange={handleCheckNameInput}
						value={checkName}
					/>
					<button className='w-10 h-10 bg-blue-blue rounded flex justify-center items-center'>
						<FaSearch />
					</button>
				</div>
			</form>
		</div>
	)
}

export default SearchProductForm

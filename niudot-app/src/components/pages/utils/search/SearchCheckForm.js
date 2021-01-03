import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchCheckForm() {
	const [checkName, setCheckName] = useState('')

	function handleCheckNameInput(event) {
		setCheckName(event.target.value)
	}

	function handleCheckNameSubmit(event) {
		event.preventDefault()
		setCheckName('')
	}

	return (
		<div className='section'>
			<h2 className='text-black-white font-bold text-xl'>
				Buscar Cheque Existente
			</h2>
			<p className='text-gray-gray'>Buscar entre los cheques registrados.</p>
			<form className='mt-2' onSubmit={handleCheckNameSubmit}>
				<div className='flex items-center gap-2'>
					<input
						type='text'
						className='form-field w-72'
						placeholder='Número de Cheque'
						onChange={handleCheckNameInput}
						value={checkName}
					/>
					<button className='w-10 h-10 rounded bg-blue-blue btn-border-blue flex justify-center items-center cursor-pointer'>
						<FaSearch />
					</button>
				</div>
			</form>
		</div>
	)
}

export default SearchCheckForm

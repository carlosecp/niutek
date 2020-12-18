import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchProviderForm() {
	const [providerName, setProviderName] = useState('')

	function handleProviderNameInput(event) {
		setProviderName(event.target.value)
	}

	function handleProviderNameSubmit(event) {
		event.preventDefault()
		setProviderName('')
	}

	return (
		<div className='pb-8'>
			<h2 className='text-black-white font-bold text-xl'>
				Buscar Proveedor
			</h2>
			<p className='text-gray-gray'>Buscar entre los proveedores registrados.</p>
			<form className='mt-2' onSubmit={handleProviderNameSubmit}>
				<div className='flex items-center gap-2'>
					<input
						type='text'
						className='form-field w-72'
						placeholder='Número de Cheque'
						onChange={handleProviderNameInput}
						value={providerName}
					/>
					<button className='w-10 h-10 bg-blue-blue rounded flex justify-center items-center'>
						<FaSearch />
					</button>
				</div>
			</form>
		</div>
	)
}

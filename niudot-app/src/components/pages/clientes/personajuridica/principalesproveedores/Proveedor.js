import React from 'react'

function Proveedor() {
	return (
		<form className='form-container form-retractile-form'>
			<div className='form-field-md'>
				<input
					type='text'
					placeholder='Nombre del proveedor'
					className='std-input rounded'
				/>
			</div>
			<div className='form-field-md'>
				<input
					type='text'
					placeholder='Contacto'
					className='std-input rounded'
				/>
			</div>
			<div className='form-field-md'>
				<input
					type='text'
					placeholder='Contacto'
					className='std-input rounded'
				/>
			</div>
		</form>
	)
}

export default Proveedor

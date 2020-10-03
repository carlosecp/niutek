import React from 'react'
import RetractileForm from '../RetractileForm'

function Comerciales() {
	return (
		<RetractileForm formTitle='Comerciales'>
			<form className='form-container'>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Nombre de la entidad'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Persona de contacto'
					/>
				</div>
				<div className='form-field-xl'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Dirección'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Años con la entidad'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Teléfono'
					/>
				</div>
			</form>
		</RetractileForm>
	)
}

export default Comerciales

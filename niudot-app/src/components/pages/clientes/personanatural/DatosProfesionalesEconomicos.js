import React from 'react'
import RetractileForm from '../../utils/RetractileForm'

function DatosProfesionalesEconomicos() {
	return (
		<RetractileForm formTitle='Datos Profesionales y Económicos'>
			<form className='form-container'>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Profesion u oficio'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Ocupación / Puesto'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Nombre de la empresa'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Descripción actividad de la empresa'
					/>
				</div>
				<div className='form-field-sm-nl'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Teléfono Empresa'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Email empresa'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Ingreso anual aproximado'
					/>
				</div>
			</form>
		</RetractileForm>
	)
}

export default DatosProfesionalesEconomicos

import React from 'react'
import RetractileForm from '../../utils/RetractileForm'
import {
	FormTextInput
} from '../../utils/formikComponentsEndpoint'

function DatosProfesionalesEconomicos() {
	return (
		<RetractileForm formTitle='Datos Profesionales y Económicos'>
			<div className='form-container'>

				<FormTextInput name='profesion' classes='lg' placeholder='Profesion u oficio'/>

				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Ocupación / Puesto'
					/>
					
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
			</div>
		</RetractileForm>
	)
}

export default DatosProfesionalesEconomicos

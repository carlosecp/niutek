import React from 'react'
import RetractileForm from '../../utils/RetractileForm'
import { FormTextInput } from '../../utils/formikComponentsEndpoint'

function DatosProfesionalesEconomicos() {
	return (
		<RetractileForm formTitle='Datos Profesionales y Económicos'>
			<div className='form-container'>
				<FormTextInput
					name='profesion'
					classes='lg'
					placeholder='Profesion u oficio'
				/>

				<FormTextInput
					name='ocupacion'
					classes='lg'
					placeholder='Ocupación / Puesto'
				/>

				<FormTextInput
					name='nombre-empresa'
					classes='lg'
					placeholder='Nombre de la empresa'
				/>

				<FormTextInput
					name='descripcion-actividad-empresa'
					classes='lg'
					placeholder='Descripción actividad de la empresa'
				/>

				<FormTextInput
					name='telefono-empresa'
					classes='sm-nl'
					placeholder='Teléfono Empresa'
				/>

				<FormTextInput
					name='email-empresa'
					classes='sm'
					placeholder='Email empresa'
				/>

				<FormTextInput
					name='ingreso-anual'
					classes='lg'
					placeholder='Ingreso anual aproximado'
				/>
			</div>
		</RetractileForm>
	)
}

export default DatosProfesionalesEconomicos

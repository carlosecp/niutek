import React from 'react'
import RetractileForm from '../../utils/RetractileForm'
import { FormTextInput } from '../../utils/formikComponentsEndpoint'

function DatosProfesionalesEconomicos() {
	return (
		<RetractileForm formTitle='Datos Profesionales y Económicos'>
			<div className='form-container'>
				<FormTextInput
					name='datos_profesion'
					classes='lg'
					placeholder='Profesion u oficio'
				/>

				<FormTextInput
					name='datos_ocupacion'
					classes='lg'
					placeholder='Ocupación / Puesto'
				/>

				<FormTextInput
					name='datos_nombre_empresa'
					classes='lg'
					placeholder='Nombre de la empresa'
				/>

				<FormTextInput
					name='datos_descripcion_actividad_empresa'
					classes='lg'
					placeholder='Descripción actividad de la empresa'
				/>

				<FormTextInput
					name='datos_telefon_-empresa'
					classes='sm-nl'
					placeholder='Teléfono Empresa'
				/>

				<FormTextInput
					name='datos_email_empresa'
					classes='sm'
					placeholder='Email empresa'
				/>

				<FormTextInput
					name='datos_ingreso_anual'
					classes='lg'
					placeholder='Ingreso anual aproximado'
				/>
			</div>
		</RetractileForm>
	)
}

export default DatosProfesionalesEconomicos

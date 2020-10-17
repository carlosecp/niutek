import React from 'react'
import RetractileForm from '../../utils/RetractileForm'
import { FormTextInput } from '../../utils/formikComponentsEndpoint'

function DatosProfesionalesEconomicos() {
	return (
		<RetractileForm formTitle='Datos Profesionales y Económicos'>
			<div className='form form-container'>
				<FormTextInput
					name='datos_profesion'
					classes='lg'
					placeholder='Profesion u oficio'
					label='Profesion u oficio'
				/>

				<FormTextInput
					name='datos_ocupacion'
					classes='lg'
					placeholder='Ocupación / Puesto'
					label='Ocupación / Puesto'
				/>

				<FormTextInput
					name='datos_nombre_empresa'
					classes='lg'
					placeholder='Nombre de la empresa'
					label='Nombre de la empresa'
				/>

				<FormTextInput
					name='datos_descripcion_actividad_empresa'
					classes='lg'
					placeholder='Descripción actividad de la empresa'
					label='Descripción actividad de la empresa'
				/>

				<FormTextInput
					name='datos_telefon_-empresa'
					classes='sm-nl'
					placeholder='Teléfono Empresa'
					label='Teléfono Empresa'
				/>

				<FormTextInput
					name='datos_email_empresa'
					classes='sm'
					placeholder='Email empresa'
					label='Email empresa'
					pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
				/>

				<FormTextInput
					name='datos_ingreso_anual'
					classes='lg'
					placeholder='Ingreso anual aproximado'
					label='Ingreso anual aproximado'
				/>
			</div>
		</RetractileForm>
	)
}

export default DatosProfesionalesEconomicos

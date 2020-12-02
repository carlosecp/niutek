import React from 'react'
import RetractileForm from '../../utils/RetractileForm'
import { FormTextInput } from '../../utils/formikComponentsEndpoint'

function DatosProfesionalesEconomicos() {
	return (
		<RetractileForm formTitle='Datos Profesionales y Económicos'>

			<div className='grid grid-cols-12 gap-2 max-w-xl'>

				<FormTextInput
					name='datos_profesion'
					size='lg'
					placeholder='Profesion u oficio'
					label='Profesion u oficio'
				/>

				<FormTextInput
					name='datos_ocupacion'
					size='lg'
					placeholder='Ocupación / Puesto'
					label='Ocupación / Puesto'
				/>

				<FormTextInput
					name='datos_nombre_empresa'
					size='lg'
					placeholder='Nombre de la empresa'
					label='Nombre de la empresa'
				/>

				<FormTextInput
					name='datos_descripcion_actividad_empresa'
					size='lg'
					placeholder='Descripción actividad de la empresa'
					label='Descripción actividad de la empresa'
				/>

				<FormTextInput
					name='datos_telefon_-empresa'
					size='sm-nl'
					placeholder='Teléfono Empresa'
					label='Teléfono Empresa'
				/>

				<FormTextInput
					name='datos_email_empresa'
					size='sm'
					placeholder='Email empresa'
					label='Email empresa'
					pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
				/>

				<FormTextInput
					name='datos_ingreso_anual'
					size='lg'
					placeholder='Ingreso anual aproximado'
					label='Ingreso anual aproximado'
				/>
			</div>

		</RetractileForm>
	)
}

export default DatosProfesionalesEconomicos

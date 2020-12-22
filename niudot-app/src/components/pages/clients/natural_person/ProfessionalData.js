// React and Router Stuff
import React from 'react'
// Other Components
import RetractileForm from '../../utils/retractile_sections'
import { Text } from '../../utils/forms'

const ProfessionalData = () => {
	return (
		<RetractileForm formTitle='Datos Profesionales y Económicos'>
			<div className='form-grid-layout'>
				<Text
					name='datos_ocupacion'
					size='lg'
					placeholder='Ocupación / Puesto'
					label='Ocupación / Puesto'
				/>
				<Text
					name='datos_nombre_empresa'
					size='lg'
					placeholder='Nombre de la empresa'
					label='Nombre de la empresa'
				/>
				<Text
					name='datos_descripcion_actividad_empresa'
					size='lg'
					placeholder='Actividad de la empresa'
					label='Actividad de la empresa'
				/>
				<Text
					name='datos_telefon_-empresa'
					size='md'
					placeholder='Teléfono Empresa'
					label='Teléfono Empresa'
				/>
				<Text
					name='datos_email_empresa'
					size='md'
					placeholder='Email empresa'
					label='Email empresa'
					pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
				/>
				<Text
					name='datos_ingreso_anual'
					size='lg'
					placeholder='Ingreso anual aproximado'
					label='Ingreso anual aproximado'
				/>
			</div>
		</RetractileForm>
	)
}

export default ProfessionalData

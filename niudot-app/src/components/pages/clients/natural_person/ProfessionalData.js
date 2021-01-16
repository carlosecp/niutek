// React and Router Stuff
import React from 'react'
// Other Components
import RetractileForm from '../../utils/retractile_sections'
import { Text } from '../../utils/forms'

const ProfessionalData = () => {
	return (
		<RetractileForm formTitle='Datos Profesionales y Económicos'>
			<div className='form-grid-layout'>
				<Text name='p_profesion_oficio' size='md' label='Profesión u Oficio' />
				<Text name='p_ocupacion_puesto' size='md' label='Ocupación/Puesto' />
				<Text name='p_nombre_empresa' size='md' label='Nombre Empresa' />
				<Text
					name='p_actividad_empresa'
					size='lg'
					label='Descripción Actividad Empresa'
					isTextArea={true}
				/>
				<Text name='p_tel_empresa' size='md' label='Teléfono Empresa' />
				<Text name='p_email_empresa' size='md' label='E-mail Empresa' />
				<Text
					name='p_ingreso_anual'
					size='md'
					label='Ingreso Anual Aproximado $US'
					type='number'
				/>
			</div>
		</RetractileForm>
	)
}

export default ProfessionalData

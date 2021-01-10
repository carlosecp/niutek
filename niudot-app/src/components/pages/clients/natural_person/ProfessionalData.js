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
					name='p_profesion_oficio'
					size='lg'
					placeholder='p_profesion_oficio'
					label='p_profesion_oficio'
				/>
				<Text
					name='p_ocupacion_puesto'
					size='lg'
					placeholder='p_ocupacion_puesto'
					label='p_ocupacion_puesto'
				/>
				<Text
					name='p_nombre_empresa'
					size='lg'
					placeholder='p_nombre_empresa'
					label='p_nombre_empresa'
				/>
				<Text
					name='p_tel_empresa'
					size='md'
					placeholder='p_tel_empresa'
					label='p_tel_empresa'
				/>
				<Text
					name='p_email_empresa'
					size='md'
					placeholder='p_email_empresa'
					label='p_email_empresa'
				/>
				<Text
					name='p_ingreso_anual'
					size='lg'
					placeholder='p_ingreso_anual'
					label='p_ingreso_anual'
					type='number'
				/>
			</div>
		</RetractileForm>
	)
}

export default ProfessionalData

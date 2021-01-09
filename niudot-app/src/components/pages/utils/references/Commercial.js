// React and Router Stuff
import React from 'react'
// Other Components
import { Text } from '../forms'
import RetractileForm from '../retractile_sections'

const Comerciales = () => {
	return (
		<RetractileForm formTitle='Comerciales'>
			<div className='form-grid-layout'>
				<Text
					name='ref_comerciales_nombre_entidad'
					size='md'
					placeholder='Nombre de la entidad'
					label='Nombre de la entidad'
				/>
				<Text
					name='ref_comerciales_persona_contacto'
					size='md'
					placeholder='Persona de contacto'
					label='Persona de contacto'
				/>
				<Text
					name='ref_comerciales_direccion'
					size='lg'
					placeholder='Dirección'
					label='Dirección'
					newline={true}
				/>
				<Text
					name='ref_comerciales_tiempo_entidad'
					size='md'
					placeholder='Años con la entidad'
					label='Años con la entidad'
				/>
				<Text
					name='ref_comerciales_telefono'
					size='md'
					placeholder='Teléfono'
					label='Teléfono'
				/>
			</div>
		</RetractileForm>
	)
}

export default Comerciales

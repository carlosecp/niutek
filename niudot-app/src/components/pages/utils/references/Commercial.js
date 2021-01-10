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
					name='prc_nombre_entidad'
					size='md'
					placeholder='prc_nombre_entidad'
					label='prc_nombre_entidad'
				/>
				<Text
					name='prc_persona_contacto'
					size='md'
					placeholder='prc_persona_contacto'
					label='prc_persona_contacto'
				/>
				<Text
					name='prc_direccion'
					size='lg'
					placeholder='prc_direccion'
					label='prc_direccion'
				/>
				<Text
					name='prc_annios_con_entidad'
					size='md'
					placeholder='prc_annios_con_entidad'
					label='prc_annios_con_entidad'
				/>
				<Text
					name='prc_telefono'
					size='md'
					placeholder='prc_telefono'
					label='prc_telefono'
				/>
			</div>
		</RetractileForm>
	)
}

export default Comerciales

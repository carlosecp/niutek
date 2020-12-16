import React from 'react'
import { FormTextInput } from '../formikComponentsEndpoint'
import RetractileForm from '../RetractileForm'

function Comerciales() {
	return (
		<RetractileForm formTitle='Comerciales'>
			<div className='form-grid-layout'>
				<FormTextInput
					name='ref_comerciales_nombre_entidad'
					size='lg'
					placeholder='Nombre de la entidad'
					label='Nombre de la entidad'	
				/>
				<FormTextInput
					name='ref_comerciales_persona_contacto'
					size='lg'
					placeholder='Persona de contacto'
					label='Persona de contacto'
				/>
				<FormTextInput
					name='ref_comerciales_direccion'
					size='xl'
					placeholder='Dirección'
					label='Dirección'
				/>
				<FormTextInput
					name='ref_comerciales_tiempo_entidad'
					size='lg'
					placeholder='Años con la entidad'
					label='Años con la entidad'
				/>
				<FormTextInput
					name='ref_comerciales_telefono'
					size='lg'
					placeholder='Teléfono'
					label='Teléfono'
				/>
			</div>
		</RetractileForm>
	)
}

export default Comerciales

import React from 'react'
import { FormTextInput } from '../formikComponentsEndpoint'
import RetractileForm from '../RetractileForm'

function Comerciales() {
	return (
		<RetractileForm formTitle='Comerciales'>
			<div className='form form-container'>
				<FormTextInput
					name='ref_comerciales_nombre_entidad'
					classes='lg'
					placeholder='Nombre de la entidad'
					label='Nombre de la entidad'
				/>

				<FormTextInput
					name='ref_comerciales_persona_contacto'
					classes='lg'
					placeholder='Persona de contacto'
					label='Persona de contacto'
				/>

				<FormTextInput
					name='ref_comerciales_direccion'
					classes='xl'
					placeholder='Dirección'
					label='Dirección'
				/>

				<FormTextInput
					name='ref_comerciales_tiempo_entidad'
					classes='lg'
					placeholder='Años con la entidad'
					label='Años con la entidad'
				/>

				<FormTextInput
					name='ref_comerciales_telefono'
					classes='lg'
					placeholder='Teléfono'
					label='Teléfono'
				/>
			</div>
		</RetractileForm>
	)
}

export default Comerciales

import React from 'react'
import { FormTextInput } from '../formikComponentsEndpoint'
import RetractileForm from '../RetractileForm'

function Comerciales() {
	return (
		<RetractileForm formTitle='Comerciales'>
			<div className='form-container'>
				<FormTextInput
					name='nombre_entidad'
					classes='lg'
					placeholder='Nombre de la entidad'
				/>

				<FormTextInput
					name='persona_contacto'
					classes='lg'
					placeholder='Persona de contacto'
				/>

				<FormTextInput name='direccion' classes='xl' placeholder='Dirección' />

				<FormTextInput
					name='tiempo_entidad'
					classes='lg'
					placeholder='Años con la entidad'
				/>

				<FormTextInput name='telefono' classes='lg' placeholder='Teléfono' />
			</div>
		</RetractileForm>
	)
}

export default Comerciales

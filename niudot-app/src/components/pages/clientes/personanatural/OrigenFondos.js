import React from 'react'
import { FormCheckboxInput } from '../../utils/formikComponentsEndpoint'
import RetractileForm from '../../utils/RetractileForm'

function OrigenFondos() {
	return (
		<RetractileForm formTitle='Origen de Fondos'>
			<div className='form form-container'>
				<FormCheckboxInput
					label='Esta es mi label'
					name='create_cargo_publico'
					classes='lg'
					title='Negocio Propio'
					showLabel={false}
				/>
			</div>
		</RetractileForm>
	)
}

export default OrigenFondos

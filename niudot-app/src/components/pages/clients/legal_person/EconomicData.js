// React and Router Stuff
import React from 'react'
// Other Components
import RetractileForm from '../../utils/RetractileForm'
import { FormTextInput } from '../../utils/formikComponentsEndpoint'

const EconomicData = () => {
	return (
		<RetractileForm formTitle='Datos Económicos'>
			<div className='form-grid-layout'>
				<FormTextInput
					name='create_ingresos_anuales_aproximados'
					size='lg'
					placeholder='Ingresos Anuales Aproximados'
					label='Ingresos Anuales Aproximados'
					type='number'
					min='0'
				/>

				<FormTextInput
					name='create_detalles_actividades'
					size='lg'
					placeholder='Detalles de las actividades a las que se dedica'
					label='Detalles de las actividades a las que se dedica'
					newLine={true}
				/>
			</div>
		</RetractileForm>
	)
}

export default EconomicData

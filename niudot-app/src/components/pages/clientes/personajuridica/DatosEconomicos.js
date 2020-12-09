import React from 'react'
import RetractileForm from '../../utils/RetractileForm'
import {
	FormTextInput,
	FormDropdownInput
} from '../../utils/formikComponentsEndpoint'

function DatosEconomicos() {
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
					size='xl'
					placeholder='Detalles de las actividades a las que se dedica'
					label='Detalles de las actividades a las que se dedica'
					newLine={true}
				/>
				
			</div>
		</RetractileForm>
	)
}

export default DatosEconomicos

import React from 'react'
import { FormDropdownInput, FormTextInput } from '../formikComponentsEndpoint'
import RetractileForm from '../RetractileForm'

function Personales({ title }) {
	const referenceInstance = title.split(' ')[1]

	return (
		<RetractileForm formTitle={title}>
			<div className='form form-container'>
				<FormTextInput
					name={`ref_personales_${referenceInstance}_nombres`}
					classes='lg'
					placeholder='Nombres'
					label='Nombres'
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_apellidos`}
					classes='lg'
					placeholder='Apellidos'
					label='Apellidos'
				/>

				<FormDropdownInput
					classes='lg'
					name={`ref_personales_${referenceInstance}_tipo_id`}
					label='Select Option'
				>
					<option value='option_1'>Option 1</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</FormDropdownInput>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_numero_id`}
					classes='sm'
					placeholder='No. Identificación'
					label='No. Identificación'
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_nacionalidad`}
					classes='sm'
					placeholder='Nacionalidad'
					label='Nacionalidad'
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_fecha_nacimiento`}
					classes='lg'
					placeholder='Fecha de nacimiento'
					label='Fecha de nacimiento'
				/>

				<FormDropdownInput
					classes='lg'
					name={`ref_personales_${referenceInstance}_estado_civil`}
					label='Select Option'
				>
					<option value='option_1'>Option 1</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</FormDropdownInput>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_numero_hijos`}
					classes='sm'
					placeholder='Número de hijos'
					label='Número de hijos'
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_direccion`}
					classes='xl'
					placeholder='Dirección'
					label='Dirección'
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_tiempo_relacion`}
					classes='lg'
					placeholder='Tiempo de conocer al referido'
					label='Tiempo de conocer al referido'
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_email`}
					classes='lg'
					placeholder='Email'
					label='Email'
					pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
				/>
			</div>
		</RetractileForm>
	)
}

export default Personales

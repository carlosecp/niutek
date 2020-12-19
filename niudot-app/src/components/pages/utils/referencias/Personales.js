import React from 'react'
import { FormDropdownInput, FormTextInput } from '../formikComponentsEndpoint'
import RetractileForm from '../RetractileForm'

function Personales({ title }) {
	const referenceInstance = title.split(' ')[1]

	return (
		<RetractileForm formTitle={title}>
			<div className='form-grid-layout grid grid-cols-12 gap-2 max-w-lg'>
				<FormTextInput
					name={`ref_personales_${referenceInstance}_nombres`}
					size='md'
					placeholder='Nombres'
					label='Nombres'
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_apellidos`}
					size='md'
					placeholder='Apellidos'
					label='Apellidos'
				/>

				<FormDropdownInput
					size='md'
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
					size='md'
					placeholder='No. Identificación'
					label='No. Identificación'
					newLine={true}
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_nacionalidad`}
					size='md'
					placeholder='Nacionalidad'
					label='Nacionalidad'
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_fecha_nacimiento`}
					size='md'
					placeholder='Fecha de nacimiento'
					label='Fecha de nacimiento'
				/>

				<FormDropdownInput
					size='md'
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
					size='md'
					placeholder='Número de hijos'
					label='Número de hijos'
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_direccion`}
					size='lg'
					placeholder='Dirección'
					label='Dirección'
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_tiempo_relacion`}
					size='md'
					placeholder='Tiempo de conocer al referido'
					label='Tiempo de conocer al referido'
				/>

				<FormTextInput
					name={`ref_personales_${referenceInstance}_email`}
					size='md'
					placeholder='Email'
					label='Email'
					pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
				/>
			</div>
		</RetractileForm>
	)
}

export default Personales

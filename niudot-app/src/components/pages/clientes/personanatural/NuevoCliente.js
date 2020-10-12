import React from 'react'
import {
	FormTextInput,
	FormCheckboxInput,
	FormDropdownInput
} from '../../utils/formikComponentsEndpoint'

function NuevoCliente() {
	return (
		<div className='form-container'>
			<FormTextInput
				name='create_codigo_cliente'
				classes='md'
				placeholder='Código de Cliente'
			/>
			<FormTextInput name='create_nombres' classes='lg-nl' placeholder='Nombres' />
			<FormTextInput name='create_apellidos' classes='lg' placeholder='Apellidos' />

			<FormDropdownInput classes='lg' name='create_tipo_id' label='Select Option'>
				<option value='option_1'>Option 1</option>
				<option value='option_2'>Option 2</option>
				<option value='option_3'>Option 3</option>
				<option value='option_4'>Option 4</option>
			</FormDropdownInput>

			<FormTextInput
				name='create_numero_id'
				classes='lg'
				placeholder='No. Identificacion'
			/>

			<FormTextInput
				name='create_nacionalidad'
				classes='lg'
				placeholder='Nacionalidad'
			/>
			<FormTextInput
				name='create_fecha_nacimiento'
				classes='lg'
				placeholder='Fecha de Nacimiento'
			/>
			<FormTextInput
				name='create_estado_civil'
				classes='sm'
				placeholder='Estado Civil'
			/>
			<FormTextInput
				name='create_numero_hijos'
				classes='sm'
				placeholder='Número de Hijos'
			/>
			<FormTextInput name='create_direccion' classes='xl' placeholder='Dirección' />
			<FormTextInput name='create_telefono_1' classes='sm' placeholder='Teléfono 1' />
			<FormTextInput name='create_telefono_2' classes='sm' placeholder='Teléfono 2' />
			<FormTextInput name='create_municipio' classes='sm' placeholder='Municipio' />
			<FormTextInput
				name='create_departamento'
				classes='sm'
				placeholder='Departamento'
			/>

			<FormCheckboxInput
				label='Esta es mi label'
				name='create_cargo_publico'
				classes='lg'
			/>
		</div>
	)
}

export default NuevoCliente

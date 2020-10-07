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
				name='codigoCliente'
				classes='md'
				placeholder='Código de Cliente'
			/>
			<FormTextInput name='nombres' classes='lg-nl' placeholder='Nombres' />
			<FormTextInput name='apellidos' classes='lg' placeholder='Apellidos' />

			<FormDropdownInput classes='lg' name='tipoId'>
				<option value='Option1'>Option 1</option>
				<option value='Option2'>Option 2</option>
				<option value='Option3'>Option 3</option>
				<option value='Option4'>Option 4</option>
			</FormDropdownInput>

			<FormTextInput
				name='numeroId'
				classes='lg'
				placeholder='No. Identificacion'
			/>
			<FormTextInput
				name='nacionalidad'
				classes='lg'
				placeholder='Nacionalidad'
			/>
			<FormTextInput
				name='fechaNacimiento'
				classes='lg'
				placeholder='Fecha de Nacimiento'
			/>
			<FormTextInput
				name='estadoCivil'
				classes='sm'
				placeholder='Estado Civil'
			/>
			<FormTextInput
				name='numeroHijos'
				classes='sm'
				placeholder='Número de Hijos'
			/>
			<FormTextInput name='direccion' classes='xl' placeholder='Dirección' />
			<FormTextInput name='telefono1' classes='sm' placeholder='Teléfono 1' />
			<FormTextInput name='telefono2' classes='sm' placeholder='Teléfono 2' />
			<FormTextInput name='municipio' classes='sm' placeholder='Municipio' />
			<FormTextInput
				name='departamento'
				classes='sm'
				placeholder='Departamento'
			/>

			<FormCheckboxInput
				label='Esta es mi label'
				name='cargoPublico'
				classes='lg'
			/>
		</div>
	)
}

export default NuevoCliente

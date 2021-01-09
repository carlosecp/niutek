import React from 'react'
import { Text, Dropdown } from '../../utils/forms'

const NewClient = () => {
	return (
		<>
			<div className='form-grid-layout'>
				<Text
					name='create_codigo_cliente'
					size='md'
					placeholder='Código de Cliente'
					label='Código de Cliente'
				/>
				<Text
					name='create_nombres'
					size='md'
					placeholder='Nombres'
					label='Nombres'
					newline={true}
				/>
				<Text
					name='create_apellidos'
					size='md'
					placeholder='Apellidos'
					label='Apellidos'
				/>
				<Dropdown
					size='md'
					name='create_tipo_id'
					label='Tipo Identificación'
					placeholder='Tipo Identificación'
				>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</Dropdown>
				<Text
					name='create_numero_id'
					size='md'
					placeholder='No. Identificación'
					label='No. Identificación'
				/>
				<Text
					name='create_nacionalidad'
					size='lg'
					placeholder='Nacionalidad'
					label='Nacionalidad'
				/>
				<Text
					name='create_fecha_nacimiento'
					size='lg'
					placeholder='Fecha de Nacimiento'
					label='Fecha de Nacimiento'
				/>
				<Text
					name='create_estado_civil'
					size='md'
					placeholder='Estado Civil'
					label='Estado Civil'
				/>
				<Text
					name='create_numero_hijos'
					size='md'
					placeholder='Número de Hijos'
					label='Número de Hijos'
					type='number'
					min='0'
				/>
				<Text
					name='create_direccion'
					size='lg'
					placeholder='Dirección'
					label='Dirección'
				/>
				<Text
					name='create_telefono_1'
					size='md'
					placeholder='Teléfono 1'
					label='Teléfono 1'
				/>
				<Text
					name='create_telefono_2'
					size='md'
					placeholder='Teléfono 2'
					label='Teléfono 2'
				/>
				<Text
					name='create_municipio'
					size='md'
					placeholder='Municipio'
					label='Municipio'
				/>
				<Text
					name='create_departamento'
					size='md'
					placeholder='Departamento'
					label='Departamento'
				/>
			</div>
		</>
	)
}

export default NewClient

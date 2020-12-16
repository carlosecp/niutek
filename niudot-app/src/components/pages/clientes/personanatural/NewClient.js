import React from 'react'
import {
	FormTextInput,
	FormDropdownInput
} from '../../utils/formikComponentsEndpoint'

function NuevoCliente() {
	return (
		<>
			<div className='form-grid-layout'>
				<FormTextInput
					name='create_codigo_cliente'
					size='md'
					placeholder='Código de Cliente'
					label='Código de Cliente'
				/>
				<FormTextInput
					name='create_nombres'
					size='md'
					placeholder='Nombres'
					label='Nombres'
					newLine={true}
				/>
				<FormTextInput
					name='create_apellidos'
					size='md'
					placeholder='Apellidos'
					label='Apellidos'
				/>
				<FormDropdownInput
					size='lg'
					name='create_tipo_id'
					label='Tipo Identificación'
					placeholder='Tipo Identificación'
				>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</FormDropdownInput>
				<FormTextInput
					name='create_numero_id'
					size='lg'
					placeholder='No. Identificación'
					label='No. Identificación'
				/>
				<FormTextInput
					name='create_nacionalidad'
					size='lg'
					placeholder='Nacionalidad'
					label='Nacionalidad'
				/>
				<FormTextInput
					name='create_fecha_nacimiento'
					size='lg'
					placeholder='Fecha de Nacimiento'
					label='Fecha de Nacimiento'
				/>
				<FormTextInput
					name='create_estado_civil'
					size='md'
					placeholder='Estado Civil'
					label='Estado Civil'
				/>
				<FormTextInput
					name='create_numero_hijos'
					size='md'
					placeholder='Número de Hijos'
					label='Número de Hijos'
					type='number'
					min='0'
				/>
				<FormTextInput
					name='create_direccion'
					size='lg'
					placeholder='Dirección'
					label='Dirección'
				/>
				<FormTextInput
					name='create_telefono_1'
					size='md'
					placeholder='Teléfono 1'
					label='Teléfono 1'
				/>
				<FormTextInput
					name='create_telefono_2'
					size='md'
					placeholder='Teléfono 2'
					label='Teléfono 2'
				/>
				<FormTextInput
					name='create_municipio'
					size='md'
					placeholder='Municipio'
					label='Municipio'
				/>
				<FormTextInput
					name='create_departamento'
					size='md'
					placeholder='Departamento'
					label='Departamento'
				/>

				{/* 
				<FormCheckboxInput
				label='Esta es mi label'
				name='create_cargo_publico'
				size='lg'
				title='Acepto que Java me gusta'
			/>  
			
			MUY POCOS CUMPLIDOS PARA JAVA, POR FAVOR ADORAR MAS - Atentamente, Juan Matus
			
			*/}
			</div>
		</>
	)
}

export default NuevoCliente

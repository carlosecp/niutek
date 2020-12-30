// React and Router Stuff
import React from 'react'
// Other Components
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
					name='create_razon_social_empresa'
					size='lg'
					placeholder='Razon Social de la Empresa'
					label='Razon Social de la Empresa'
					newLine={true}
				/>
				<Dropdown size='md' name='create_tipo_id' label='Tipo Identificación'>
					<option value=''>Tipo Identificación</option>
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
					size='md'
					placeholder='Nacionalidad'
					label='Nacionalidad'
				/>
				<Text
					name='create_numero_empleados'
					size='md'
					placeholder='Número de Empleados'
					label='Número de Empleados'
					type='number'
					min='0'
				/>
				<Text
					name='create_telefono_1'
					size='sm'
					placeholder='Teléfono 1'
					label='Teléfono 1'
				/>
				<Text
					name='create_telefono_2'
					size='sm'
					placeholder='Teléfono 2'
					label='Teléfono 2'
				/>
				<Text
					name='create_direccion'
					size='lg'
					placeholder='Dirección'
					label='Dirección'
				/>
				<Text
					name='create_fecha_constitucion'
					size='md'
					placeholder='Fecha de Constitución'
					label='Fecha de Constitución'
				/>
				<Text
					name='create_fecha_personería'
					size='md'
					placeholder='Fecha de Personería'
					label='Fecha de Personería'
				/>
			</div>
		</>
	)
}

export default NewClient

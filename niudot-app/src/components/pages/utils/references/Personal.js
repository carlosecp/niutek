// React and Router Stuff
import React from 'react'
// Other Components
import { Dropdown, Text } from '../forms'
import RetractileForm from '../retractile_sections'

const Personal = ({ title }) => {
	const referenceInstance = title.split(' ')[1]

	return (
		<RetractileForm formTitle={title}>
			<div className='form-grid-layout grid grid-cols-12 gap-2 max-w-lg'>
				<Text
					name={`ref_personales_${referenceInstance}_nombres`}
					size='md'
					placeholder='Nombres'
					label='Nombres'
				/>

				<Text
					name={`ref_personales_${referenceInstance}_apellidos`}
					size='md'
					placeholder='Apellidos'
					label='Apellidos'
				/>

				<Dropdown
					size='md'
					name={`ref_personales_${referenceInstance}_tipo_id`}
					label='Select Option'
				>
					<option value='option_1'>Option 1</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</Dropdown>

				<Text
					name={`ref_personales_${referenceInstance}_numero_id`}
					size='md'
					placeholder='No. Identificación'
					label='No. Identificación'
					newLine={true}
				/>

				<Text
					name={`ref_personales_${referenceInstance}_nacionalidad`}
					size='md'
					placeholder='Nacionalidad'
					label='Nacionalidad'
				/>

				<Text
					name={`ref_personales_${referenceInstance}_fecha_nacimiento`}
					size='md'
					placeholder='Fecha de nacimiento'
					label='Fecha de nacimiento'
				/>

				<Dropdown
					size='md'
					name={`ref_personales_${referenceInstance}_estado_civil`}
					label='Select Option'
				>
					<option value='option_1'>Option 1</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</Dropdown>

				<Text
					name={`ref_personales_${referenceInstance}_numero_hijos`}
					size='md'
					placeholder='Número de hijos'
					label='Número de hijos'
				/>

				<Text
					name={`ref_personales_${referenceInstance}_direccion`}
					size='lg'
					placeholder='Dirección'
					label='Dirección'
				/>

				<Text
					name={`ref_personales_${referenceInstance}_tiempo_relacion`}
					size='md'
					placeholder='Tiempo de conocer al referido'
					label='Tiempo de conocer al referido'
				/>

				<Text
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

export default Personal

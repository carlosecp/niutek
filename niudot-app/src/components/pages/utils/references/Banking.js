// React and Router Stuff
import React from 'react'
// Other Components
import { Dropdown, Text } from '../forms'
import RetractileForm from '../retractile_sections'

const Bancarias = () => {
	return (
		<RetractileForm formTitle='Bancarias'>
			<div className='form-grid-layout'>
				<Text
					name='ref_bancarias_nombre_entidad'
					size='md'
					placeholder='Nombre de la entidad'
					label='Nombre de la entidad'
				/>

				<Text
					name='ref_bancarias_fecha_relacion'
					size='md'
					placeholder='Fecha inicio de la relación'
					label='Fecha inicio de la relación'
					newLine={true}
				/>

				<Text
					name='ref_bancarias_tipo_servicio'
					size='md'
					placeholder='Tipo de servicio recibido'
					label='Tipo de servicio recibido'
				/>

				<Text
					name='ref_bancarias_tiempo_entidad'
					size='md'
					placeholder='Años con la entidad'
					label='Años con la entidad'
					type='number'
					min='0'
				/>

				<Text
					name='ref_bancarias_telefono'
					size='md'
					placeholder='Teléfono'
					label='Teléfono'
				/>
				<Text
					name='ref_bancarias_numero_cuenta'
					size='sm'
					placeholder='Número de cuenta'
					label='Número de cuenta'
				/>
				<Dropdown size='sm' name='ref_bancarias_moneda' label='Moneda'>
					<option value='option_1'>Option 1</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</Dropdown>

				<Text
					name='ref_bancarias_nombre_banco'
					size='md'
					placeholder='Nombre del banco'
					label='Nombre del banco'
				/>
			</div>
		</RetractileForm>
	)
}

export default Bancarias

// React and Router Stuff
import React from 'react'
// Other Components
import { Dropdown, Text } from '../forms'
import RetractileForm from '../retractile_sections'

const Banking = () => {
	return (
		<RetractileForm formTitle='Banking'>
			<div className='form-grid-layout'>
				<Text
					name='prb_nombre_entidad'
					size='md'
					placeholder='prb_nombre_entidad'
					label='prb_nombre_entidad'
				/>
				<Text
					name='prb_tipo_servicio_recibido'
					size='md'
					placeholder='prb_tipo_servicio_recibido'
					label='prb_tipo_servicio_recibido'
				/>
				<Text
					name='prb_fecha_inicio_relacion'
					size='md'
					placeholder='prb_fecha_inicio_relacion'
					label='prb_fecha_inicio_relacion'
				/>
				<Text
					name='prb_annios_con_entidad'
					size='md'
					placeholder='prb_annios_con_entidad'
					label='prb_annios_con_entidad'
				/>
				<Text
					name='prb_telefono'
					size='md'
					placeholder='prb_telefono'
					label='prb_telefono'
				/>
				<Text name='prb_reg' size='sm' placeholder='prb_reg' label='prb_reg' />
				<Text
					name='pct_num_cuenta'
					size='md'
					placeholder='prb_telefono'
					label='prb_telefono'
				/>
				<Dropdown size='md' name='pct_cod_moneda' label='pct_cod_moneda'>
					<option value=''>Seleccione</option>
					<option value={0}>Cordobas</option>
					<option value={1}>Dolares</option>
				</Dropdown>
				<Text
					name='pct_cod_banco'
					size='md'
					placeholder='pct_cod_banco'
					label='pct_cod_banco'
				/>
				<Text
					name='pct_reg'
					size='md'
					placeholder='pct_reg'
					label='pct_reg'
					type='number'
				/>
			</div>
		</RetractileForm>
	)
}

export default Banking

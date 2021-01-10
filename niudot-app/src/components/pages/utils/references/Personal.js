// React and Router Stuff
import React from 'react'
// Other Components
import { Dropdown, Text } from '../forms'
import RetractileForm from '../retractile_sections'

const Personal = ({ title }) => {
	return (
		<RetractileForm formTitle={title}>
			<div className='form-grid-layout grid grid-cols-12 gap-2 max-w-lg'>
				<Text
					name='prp_nombre'
					size='md'
					placeholder='prp_nombre'
					label='prp_nombre'
				/>
				<Text
					name='prp_tipo_doc'
					size='md'
					placeholder='prp_tipo_doc'
					label='prp_tipo_doc'
				/>
				<Text
					name='prp_num_doc'
					size='md'
					placeholder='prp_num_doc'
					label='prp_num_doc'
				/>
				<Text
					name='prp_telefono1'
					size='md'
					placeholder='prp_telefono1'
					label='prp_telefono1'
				/>
				<Text
					name='prp_telefono2'
					size='md'
					placeholder='prp_telefono2'
					label='prp_telefono2'
				/>
				<Text
					name='prp_direccion'
					size='md'
					placeholder='prp_direccion'
					label='prp_direccion'
				/>
				<Text
					name='prp_lugar_trabajo'
					size='md'
					placeholder='prp_lugar_trabajo'
					label='prp_lugar_trabajo'
				/>
				<Text
					name='prp_telefono_trabajo'
					size='md'
					placeholder='prp_telefono_trabajo'
					label='prp_telefono_trabajo'
				/>
				<Text
					name='prp_tiempo_conocer'
					size='md'
					placeholder='prp_tiempo_conocer'
					label='prp_tiempo_conocer'
				/>
				<Text
					name='prp_e_mail'
					size='md'
					placeholder='prp_e_mail'
					label='prp_e_mail'
				/>
				<Text
					name='prp_reg'
					size='md'
					placeholder='prp_reg'
					label='prp_reg'
					type='number'
				/>
			</div>
		</RetractileForm>
	)
}

export default Personal

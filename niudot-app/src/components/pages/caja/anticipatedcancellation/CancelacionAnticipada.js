import React, { useState } from 'react'
import {
	FormTextInput,
	FormDropdownInput
} from '../../utils/formikComponentsEndpoint'


export default function CancelacionAnticipada({ value }) {
	return (
		<>
			<div className='form-grid-layout'>
				<FormTextInput
					name='create_nombre_del_cliente'
					size='xl'
					placeholder='Nombre de cliente'
					label='Cliente'
				/>

				<FormTextInput
					name='create_tipo_de_credito'
					size='xl'
					placeholder='Tipo de Crédito'
					label='Tipo de Crédito'
					newLine={true}
				/>
				<FormTextInput
					name='create_nombre_del_producto'
					size='xl'
					placeholder='Nombre del Producto'
					label='Nombre del Producto'
					newLine={true}
				/>
				<FormTextInput
					name='create_numero_de_identificacion'
					size='lg'
					placeholder='Número de Identificación'
					label='Número de Identificación'
					newLine={true}
				/>
				<FormDropdownInput
					size='lg'
					name='create_tipo_id'
					label='Tipo Identificación'
				>
					<option value=''>Tipo Identificación</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</FormDropdownInput>
				<FormDropdownInput size='lg' name='create_moneda' label='Moneda'>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</FormDropdownInput>
				<FormTextInput
					name='create_fecha_de_entrega'
					size='lg'
					placeholder='Fecha de Entrega'
					label='Fecha de Entrega'
					newLine={true}
				/>
				<FormDropdownInput
					size='lg'
					name='create_tipo_de_entrega'
					label='Tipo de Entrega'
					newLine={true}
				>
					<option value=''>Tipo de Entrega</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</FormDropdownInput>

				<FormTextInput
					name='create_numero_de_cheque'
					size='lg'
					placeholder='Número de Cheque'
					label='Número de Cheque'
					newLine={true}
				/>

				<FormTextInput
					name='create_nombre_del_banco'
					size='lg'
					placeholder='Nombre del Banco'
					label='Nombre del Banco'
				/>
			</div>
		</>
	)
}

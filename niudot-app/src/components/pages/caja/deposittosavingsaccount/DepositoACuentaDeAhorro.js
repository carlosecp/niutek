import React, { useState } from 'react'
import {
	FormTextInput,
	FormDropdownInput
} from '../../utils/formikComponentsEndpoint'
import SubmitBtn from '../../utils/SubmitBtn'

export default function DepositoACuentaDeAhorro({ value }) {
	return (
		<>
			<div className='form-grid-layout'>
				<FormTextInput
					name='create_nombre_del_cliente'
					size='lg'
					placeholder='Nombre de cliente'
					label='Cliente'
				/>

				<FormTextInput
					name='create_tipo_crédito'
					size='lg'
					placeholder='Tipo de Crédito'
					label='Tipo de Crédito'
					newLine={true}
				/>
				<FormTextInput
					name='create_nombre_del_producto'
					size='lg'
					placeholder='Nombre del Producto'
					label='Nombre del Producto'
					newLine={true}
				/>
				<FormTextInput
					name='create_numero_de_identificacion'
					size='md'
					placeholder='Número de Identificación'
					label='Número de Identificación'
					newLine={true}
				/>
				<FormDropdownInput
					size='md'
					name='create_tipo_id'
					label='Tipo Identificación'
				>
					<option value=''>Tipo Identificación</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</FormDropdownInput>
				<FormTextInput
					name='create_fecha_de_abono'
					size='md'
					placeholder='Fecha de Abono'
					label='Fecha de Abono'
					newLine={true}
				/>
				<FormTextInput
					name='create_monto_vencido'
					size='md'
					placeholder='Monto Vencido'
					label='Monto Vencido'
					newLine={true}
					type='number'
					min='0'
				/>
				<FormTextInput
					name='create_monto_corriente'
					size='md'
					placeholder='Monto Corriente'
					label='Monto Corriente'
					newLine={true}
					type='number'
					min='0'
				/>

				<FormTextInput
					name='create_abono_extraordinario'
					size='md'
					placeholder='Abono Extraordinario'
					label='Abono Extraordinario'
					newLine={true}
					type='number'
					min='0'
				/>
				<FormTextInput
					name='create_total_a_pagar'
					size='md'
					placeholder='Total a Pagar'
					label='Total a Pagar'
					newLine={true}
					type='number'
					min='0'
				/>

				<FormDropdownInput size='md' name='create_moneda' label='Moneda'>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</FormDropdownInput>

				<FormTextInput
					name='create_efectivo'
					size='md'
					placeholder='Efectivo'
					label='Efectivo'
					newLine={true}
					type='number'
					min='0'
				/>

				<FormTextInput
					name='create_numero_cheque'
					size='md'
					placeholder='No. Cheque'
					label='Número de Cheque'
					newLine={true}
				/>
				<FormTextInput
					name='create_nombre_del_banco'
					size='md'
					placeholder='Nombre del Banco'
					label='Nombre del Banco'
				/>

				<FormTextInput
					name='create_tarjeta'
					size='md'
					placeholder='Tarjeta'
					label='Tarjeta'
					newLine={true}
				/>
				<FormTextInput
					name='create_nombre_del_banco1'
					size='md'
					placeholder='Nombre del Banco'
					label='Nombre del Banco'
				/>
				<SubmitBtn />
			</div>
		</>
	)
}

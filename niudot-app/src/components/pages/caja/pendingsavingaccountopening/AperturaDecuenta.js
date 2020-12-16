import React, { useState } from 'react'
import {
	FormTextInput,
	FormDropdownInput
} from '../../utils/formikComponentsEndpoint'
import SubmitBtn from '../../utils/SubmitBtn'

export default function AperturaDeCuenta({ value }) {
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
					name='create_producto_de_ahorro'
					size='xl'
					placeholder='Producto de Ahorro'
					label='Producto de Ahorro'
					newLine={true}
				/>
				<FormTextInput
					name='create_numero_de_cuenta_de_ahorro'
					size='lg'
					placeholder='Número de Cuenta de Ahorro'
					label='Número de Cuenta de Ahorro'
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
				<FormTextInput
					name='create_monto_a_apertura'
					size='lg'
					placeholder='Monto a Apertura'
					label='Monto a Apertura'
					newLine={true}
					type='number'
					min='0'
				/>

				<FormTextInput
					name='create_efectivo'
					size='lg'
					placeholder='Efectivo'
					label='Efectivo'
					newLine={true}
					type='number'
					min='0'
				/>

				<FormTextInput
					name='create_numero_cheque'
					size='lg'
					placeholder='No. Cheque'
					label='Número de Cheque'
					newLine={true}
				/>
				<FormTextInput
					name='create_nombre_del_banco'
					size='lg'
					placeholder='Nombre del Banco'
					label='Nombre del Banco'
				/>

				<FormTextInput
					name='create_tarjeta'
					size='lg'
					placeholder='Tarjeta'
					label='Tarjeta'
					newLine={true}
				/>
				<FormTextInput
					name='create_nombre_del_banco1'
					size='lg'
					placeholder='Nombre del Banco'
					label='Nombre del Banco'
				/>
				<SubmitBtn />
			</div>
		</>
	)
}

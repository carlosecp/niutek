import React, { useState } from 'react'
import {
	FormTextInput,
	FormDropdownInput
} from '../../utils/formikComponentsEndpoint'
import SubmitBtn from '../../utils/SubmitBtn'

export default function AbonoAPrestamo({ value }) {
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

				<FormTextInput
					name='create_fecha_de_abono'
					size='lg'
					placeholder='Fecha de Abono'
					label='Fecha de Abono'
					newLine={true}
				/>
				<FormTextInput
					name='create_monto_vencido'
					size='lg'
					placeholder='Monto Vencido'
					label='Monto Vencido'
					newLine={true}
					type='number'
					min='0'
				/>
                <FormTextInput
					name='create_monto_corriente'
					size='lg'
					placeholder='Monto Corriente'
					label='Monto Corriente'
					type='number'
					min='0'
				/>
                 <FormTextInput
					name='create_abono_extraordinario'
					size='lg'
					placeholder='Abono Extraordinario'
					label='Abono Extraordinario'
					type='number'
					min='0'
				/>
                 <FormTextInput
					name='create_total_a_pagar'
					size='lg'
					placeholder='Total a Pagar'
					label='Total a Pagar'
					type='number'
					min='0'
				/>

				<FormDropdownInput
					size='lg'
					name='create_moneda'
					label='Moneda'
					newLine={true}
				>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</FormDropdownInput>

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

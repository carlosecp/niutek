import React, { useState } from 'react'
import {
	FormTextInput,
	FormDropdownInput
} from '../../utils/formikComponentsEndpoint'
import SubmitBtn from '../../utils/SubmitBtn'

export default function RetiroACuentaDeAhorro({ value }) {
	return (
		<>
			<h2 className='text-black-white text-lg font-bold'>
            Retiro a Cuenta de Ahorro{' '}
			</h2>
			<div className='form-grid-layout'>
				<FormTextInput
					name='create_nombre_del_cliente'
					size='lg'
					placeholder='Nombre de cliente'
					label='Cliente'
				/>

				<FormTextInput
					name='create_producto_de_certificado'
					size='lg'
					placeholder='Producto de Certificado'
					label='Producto de Certificado'
					newLine={true}
				/>
				<FormTextInput
					name='create_numero_de_cuenta'
					size='lg'
					placeholder='Número de Cuenta'
					label='Número de Cuenta'
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
				<FormDropdownInput size='md' name='create_moneda' label='Moneda'>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</FormDropdownInput>
				<FormTextInput
					name='create_fecha_de_entrega'
					size='md'
					placeholder='Fecha de Entrega'
					label='Fecha de Entrega'
					newLine={true}
				/>

				<FormTextInput
					name='create_numero_de_cheque'
					size='md'
					placeholder='Número de Cheque'
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

import React from 'react'
import { Text, Dropdown } from '../../utils/forms'
import SubmitBtn from '../../utils/SubmitBtn'

export default function RetiroACuentaDeAhorro({ value }) {
	return (
		<>
			<h2 className='text-black-white text-lg font-bold'>
				Retiro a Cuenta de Ahorro{' '}
			</h2>
			<div className='form-grid-layout'>
				<Text
					name='create_nombre_del_cliente'
					size='lg'
					placeholder='Nombre de cliente'
					label='Cliente'
				/>

				<Text
					name='create_producto_de_certificado'
					size='lg'
					placeholder='Producto de Certificado'
					label='Producto de Certificado'
					newline={true}
				/>
				<Text
					name='create_numero_de_cuenta'
					size='lg'
					placeholder='Número de Cuenta'
					label='Número de Cuenta'
					newline={true}
				/>
				<Text
					name='create_numero_de_identificacion'
					size='md'
					placeholder='Número de Identificación'
					label='Número de Identificación'
					newline={true}
				/>
				<Dropdown size='md' name='create_tipo_id' label='Tipo Identificación'>
					<option value=''>Tipo Identificación</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</Dropdown>
				<Dropdown size='md' name='create_moneda' label='Moneda'>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</Dropdown>
				<Text
					name='create_fecha_de_entrega'
					size='md'
					placeholder='Fecha de Entrega'
					label='Fecha de Entrega'
					newline={true}
				/>

				<Text
					name='create_numero_de_cheque'
					size='md'
					placeholder='Número de Cheque'
					label='Número de Cheque'
					newline={true}
				/>

				<Text
					name='create_nombre_del_banco'
					size='md'
					placeholder='Nombre del Banco'
					label='Nombre del Banco'
				/>
				<Text
					name='create_tarjeta'
					size='md'
					placeholder='Tarjeta'
					label='Tarjeta'
					newline={true}
				/>
				<Text
					name='create_nombre_del_banco1'
					size='md'
					placeholder='Nombre del Banco'
					label='Nombre del Banco'
				/>
			</div>
			<SubmitBtn />
		</>
	)
}

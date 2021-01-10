// React and Router Stuff
import React from 'react'
// Other Components
import { Text, Dropdown } from '../../utils/forms'
import SubmitBtn from '../../utils/SubmitBtn'

const AccountOpening = ({ value }) => {
	return (
		<>
			<div className='form-grid-layout'>
				<Text
					name='create_nombre_del_cliente'
					size='lg'
					placeholder='Nombre de cliente'
					label='Cliente'
				/>

				<Text
					name='create_producto_de_ahorro'
					size='lg'
					placeholder='Producto de Ahorro'
					label='Producto de Ahorro'
					newline={true}
				/>
				<Text
					name='create_numero_de_cuenta_de_ahorro'
					size='md'
					placeholder='Número de Cuenta de Ahorro'
					label='Número de Cuenta de Ahorro'
					newline={true}
				/>
				<Text
					name='create_numero_de_identificacion'
					size='md'
					placeholder='Número de Identificación'
					label='Número de Identificación'
					newline={true}
				/>
				<Dropdown size='md' name='p_tipo_doc' label='Tipo Identificación'>
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
					name='create_monto_a_apertura'
					size='md'
					placeholder='Monto a Apertura'
					label='Monto a Apertura'
					newline={true}
					type='number'
					min='0'
				/>

				<Text
					name='create_efectivo'
					size='md'
					placeholder='Efectivo'
					label='Efectivo'
					newline={true}
					type='number'
					min='0'
				/>

				<Text
					name='create_numero_cheque'
					size='md'
					placeholder='No. Cheque'
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

export default AccountOpening

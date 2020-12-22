// React and Router Stuff
import React from 'react'
import PropTypes from 'prop-types'
// Other Components
import { Text, Dropdown } from '../../utils/forms'
import SubmitBtn from '../../utils/SubmitBtn'

const DepositToSavingsAccount = ({ value }) => {
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
					name='create_tipo_crédito'
					size='lg'
					placeholder='Tipo de Crédito'
					label='Tipo de Crédito'
					newLine={true}
				/>
				<Text
					name='create_nombre_del_producto'
					size='lg'
					placeholder='Nombre del Producto'
					label='Nombre del Producto'
					newLine={true}
				/>
				<Text
					name='create_numero_de_identificacion'
					size='md'
					placeholder='Número de Identificación'
					label='Número de Identificación'
					newLine={true}
				/>
				<Dropdown size='md' name='create_tipo_id' label='Tipo Identificación'>
					<option value=''>Tipo Identificación</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</Dropdown>
				<Text
					name='create_fecha_de_abono'
					size='md'
					placeholder='Fecha de Abono'
					label='Fecha de Abono'
					newLine={true}
				/>
				<Text
					name='create_monto_vencido'
					size='md'
					placeholder='Monto Vencido'
					label='Monto Vencido'
					newLine={true}
					type='number'
					min='0'
				/>
				<Text
					name='create_monto_corriente'
					size='md'
					placeholder='Monto Corriente'
					label='Monto Corriente'
					newLine={true}
					type='number'
					min='0'
				/>

				<Text
					name='create_abono_extraordinario'
					size='md'
					placeholder='Abono Extraordinario'
					label='Abono Extraordinario'
					newLine={true}
					type='number'
					min='0'
				/>
				<Text
					name='create_total_a_pagar'
					size='md'
					placeholder='Total a Pagar'
					label='Total a Pagar'
					newLine={true}
					type='number'
					min='0'
				/>

				<Dropdown size='md' name='create_moneda' label='Moneda'>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</Dropdown>

				<Text
					name='create_efectivo'
					size='md'
					placeholder='Efectivo'
					label='Efectivo'
					newLine={true}
					type='number'
					min='0'
				/>

				<Text
					name='create_numero_cheque'
					size='md'
					placeholder='No. Cheque'
					label='Número de Cheque'
					newLine={true}
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
					newLine={true}
				/>
				<Text
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

DepositToSavingsAccount.propTypes = {
	value: PropTypes.object
}

export default DepositToSavingsAccount

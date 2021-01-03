// React and Router Stuff
import React from 'react'
import PropTypes from 'prop-types'
// Other Components
import { Text, Dropdown } from '../../utils/forms'
import SubmitBtn from '../../utils/SubmitBtn'

const AnticipatedCancelation = ({ value }) => {
	return (
		<>
			<h2 className='text-black-white text-xl font-bold'>
				Cancelación Anticipada{' '}
			</h2>
			<div className='form-grid-layout'>
				<Text
					name='create_nombre_del_cliente'
					size='lg'
					placeholder='Nombre de cliente'
					label='Cliente'
				/>

				<Text
					name='create_tipo_de_credito'
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
					newLine={true}
				/>
				<Dropdown
					size='md'
					name='create_tipo_de_entrega'
					label='Tipo de Entrega'
					newLine={true}
				>
					<option value=''>Tipo de Entrega</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</Dropdown>

				<Text
					name='create_numero_de_cheque'
					size='md'
					placeholder='Número de Cheque'
					label='Número de Cheque'
					newLine={true}
				/>

				<Text
					name='create_nombre_del_banco'
					size='md'
					placeholder='Nombre del Banco'
					label='Nombre del Banco'
				/>
			</div>
			<SubmitBtn />
		</>
	)
}

AnticipatedCancelation.propTypes = {
	value: PropTypes.object
}

export default AnticipatedCancelation

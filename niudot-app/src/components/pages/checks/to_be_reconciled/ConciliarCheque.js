// React and Router Stuff
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Extra libraries
import { FaPrint } from 'react-icons/fa'
// Other Components
import {
	FormDropdownInput,
	FormTextArea,
	FormTextInput
} from '../../utils/formikComponentsEndpoint'

const ConciliarCheque = ({ value }) => {
	const [open, setOpen] = useState(false)
	const closeModal = () => setOpen(false)
	return (
		<>
			<h2 className='text-black-white text-xl font-bold p-4 pl-0'>
				Datos del Cheque{' '}
			</h2>

			<div className='form-grid-layout'>
				<FormTextInput
					name='create_fecha_de_entrega'
					size='md'
					placeholder='Fecha de Entrega'
					label='Fecha de Entrega'
				/>
				<FormTextInput
					name='create_numero_de_cheque'
					size='md'
					placeholder='Número de Cheque'
					newLine={true}
					label='Número de Cheque'
				/>
				<FormDropdownInput size='md' name='create_moneda' label='Moneda'>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</FormDropdownInput>

				<FormTextInput
					name='create_paguese_orden'
					size='md'
					placeholder='Paguese a la orden de'
					label='Paguese a la orden de'
					newLine={true}
				/>

				<FormTextInput
					name='create_cantidad_de'
					size='sm'
					placeholder='Cantidad'
					label='La cantidad de'
					newLine={true}
					type='number'
					min='0'
				/>
				<FormTextInput
					name='create_cantidad_en_letras'
					size='lg'
					placeholder='CINCO MIL SETECIENTOS TRES CORDOBAS CON 47 CENTAVOS'
					label='Cantidad'
					newLine={true}
				/>
				<FormTextArea
					name='create_por_concepto_de'
					size='lg'
					newLine={true}
					placeholder='Concepto de...'
					label='Por concepto de:'
				/>
				<FormTextInput
					name='create_fecha_de_conciliacion'
					size='md'
					placeholder='Fecha de Conciliación'
					label='Fecha de Conciliación'
				/>
			</div>
			<div className='inline-flex flex-wrap py-4'>
				<button
					type='button'
					className='btn bg-blue-blue btn-border-blue flex items-center gap-2 sm:my-3 mr-2'
				>
					<FaPrint className='align-middle sm:mr-2' />
					Imprimir Cheque
				</button>
			</div>
		</>
	)
}

ConciliarCheque.propTypes = {
	value: PropTypes.object
}

export default ConciliarCheque

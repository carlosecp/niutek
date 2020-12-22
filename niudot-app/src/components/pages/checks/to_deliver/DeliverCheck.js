// React and Router Stuff
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Extra libraries
import * as Yup from 'yup'
import { Formik } from 'formik'
import { FaPrint, FaTrashAlt, FaUserSlash } from 'react-icons/fa'
import Popup from 'reactjs-popup'
// Other Components
import DeleteBtn from '../../utils/DeleteBtn'
import { Dropdown, Text } from '../../utils/forms'
import VoidBtn from '../../utils/VoidBtn'
// Data
import { createValues, createValuesSchema } from './initialValues'

const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

const DeliverCheck = ({ value }) => {
	const [open, setOpen] = useState(false)
	const closeModal = () => setOpen(false)
	return (
		<>
			<h2 className='text-black-white text-xl font-bold p-4 pl-0'>
				Entregar Cheque{' '}
			</h2>

			<div className='form-grid-layout'>
				<Text
					name='create_fecha_de_entrega'
					size='md'
					placeholder='Fecha de Entrega'
					label='Fecha de Entrega'
				/>
				<Text
					name='create_numero_de_cheque'
					size='md'
					placeholder='Número de Cheque'
					newLine={true}
					label='Número de Cheque'
				/>
				<Dropdown size='md' name='create_moneda' label='Moneda'>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dólares</option>
					<option value='option_4'>Colones</option>
				</Dropdown>

				<Text
					name='create_paguese_orden'
					size='md'
					placeholder='Paguese a la orden de'
					label='Paguese a la orden de'
					newLine={true}
				/>

				<Text
					name='create_cantidad_de'
					size='sm'
					placeholder='Cantidad'
					label='La cantidad de'
					newLine={true}
					type='number'
					min='0'
				/>
				<Text
					name='create_cantidad_en_letras'
					size='lg'
					placeholder='CINCO MIL SETECIENTOS TRES CORDOBAS CON 47 CENTAVOS'
					label='Cantidad'
					newLine={true}
				/>
				<Text
					name='create_por_concepto_de'
					size='lg'
					newLine={true}
					placeholder='Concepto de...'
					label='Por concepto de:'
					isTextArea={true}
				/>

				<Text
					name='create_entregar_a'
					size='lg'
					placeholder='Nombre de la persona a entregar el cheque'
					label='Entregar a'
					newLine={true}
				/>
				<Text
					name='create_cedula'
					size='lg'
					placeholder='Número de Cédula'
					label='Número de Cédula'
					newLine={true}
				/>
				<Text
					name='create_fecha_de_entrega1'
					size='md'
					placeholder='Fecha de Entrega'
					label='Fecha de Entrega'
				/>
			</div>
			<div className='inline-flex flex-wrap pt-4 min-w-full pb-4'>
				<button
					type='button'
					className='btn bg-blue-blue btn-border-blue flex items-center gap-2 sm:my-3 mr-2'
				>
					<FaPrint className='align-middle sm:mr-2' />
					Imprimir Cheque
				</button>

				<Popup
					trigger={
						<button
							type='button'
							className='btn bg-gray-cstm-14 inline-flex items-center gap-2 sm:break-words sm:text-sm sm:max-w-full overflow-hidden sm:flex-wrap sm:my-3 mr-2'
						>
							<FaTrashAlt className='align-middle sm:mr-2' />
							Eliminar Cheque
						</button>
					}
					modal
					nested
					onClose={closeModal}
				>
					{(close) => (
						<div className='section'>
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={(values) => {
									alert(JSON.stringify(values, null, 2))
								}}
							></Formik>
							<div></div>

							<h2 className='text-black-white text-xl font-bold'>
								¿Estás seguro que quieres eliminar este cheque?{' '}
							</h2>
							<DeleteBtn onClick={close} />
						</div>
					)}
				</Popup>
				<Popup
					trigger={
						<button
							type='button'
							className='btn bg-red-400 inline-flex items-center gap-2 sm:break-words sm:text-sm sm:max-w-full overflow-hidden sm:flex-wrap sm:my-3'
						>
							<FaUserSlash className='align-middle sm:mr-2' />
							Anular Cheque
						</button>
					}
					modal
					nested
					onClose={closeModal}
				>
					{(close) => (
						<div className='section'>
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}
								onSubmit={(values) => {
									alert(JSON.stringify(values, null, 2))
								}}
							></Formik>
							<div></div>
							<h2 className='text-black-white text-xl font-bold'>
								¿Estás seguro que quieres anular este cheque?{' '}
							</h2>
							<VoidBtn onClick={close} />
						</div>
					)}
				</Popup>
			</div>
		</>
	)
}

DeliverCheck.propTypes = {
	value: PropTypes.object
}

export default DeliverCheck

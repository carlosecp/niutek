// React and Router Stuff
import React from 'react'
// Extra libraries
import { Formik, Form } from 'formik'
import { Dropdown, Text } from '../../utils/forms'
import { FaCheck, FaBan, FaPrint, FaTrash } from 'react-icons/fa'
// Other Components
import Table from '../../utils/tables'
import Popup from '../../utils/tables/Popup'

const EditChecksPopup = ({ togglePopup }) => {
	const headers = ['Cuenta', 'Descripción', 'Débito', 'Crédito']

	const rows = [
		{
			account: '512389023',
			description: 'EQUIPO DE TRANSPORTE',
			debit: 5750.5,
			credit: 0
		},
		{
			account: '512389023',
			description: 'BDF CTA. CORRIENTE C$ No. 10232313',
			debit: 0,
			credit: 5750.5
		}
	]

	return (
		<Popup togglePopup={togglePopup}>
			<Formik
				//initialValues={initialValues}
				//validationSchema={validationSchema}
				onSubmit={(values) => {
					alert(JSON.stringify(values, null, 2))
				}}
			>
				<Form>
					<div className='section'>
						<h2 className='text-black-white text-xl font-bold'>
							Datos del Cheque
						</h2>
						<div className='form-grid-layout'>
							<Text
								name='numero_cheque'
								size='md'
								placeholder='No. Cheque'
								label='No. Cheque'
							/>
							<Text
								name='moneda'
								size='md'
								placeholder='Moneda'
								label='Moneda'
							/>
							<Text
								name='paguese'
								size='lg'
								placeholder='Paguese a la orden de'
								label='A orden de'
								newline={true}
							/>
							<Text
								name='cantidad'
								size='md'
								placeholder='Monto'
								label='Monto'
								type='number'
							/>
							<Text
								name='cantidad'
								size='md'
								placeholder='Monto'
								label='Descripción del Monto'
							/>
							<Dropdown name='account' size='md' label='Cuenta Bancaria'>
								<option value=''>Defualt Value</option>
								<option value='Juan'>Juan estuvo aqui</option>
								<option value='Juan'>Juan estuvo aqui</option>
							</Dropdown>
						</div>
						<div className='my-8'>
							<Table headers={headers} rows={rows} />
						</div>
						<div className='form-grid-layout'>
							<Text
								name='cantidad'
								size='md'
								label='Total Débito'
								value={312434}
								disabled
							/>
							<Text
								name='cantidad'
								size='md'
								label='Total Crédito'
								value={23423}
								disabled
							/>
						</div>
					</div>
				</Form>
			</Formik>
			<div className='mx-4 mb-6 flex gap-2 justify-center flex-wrap'>
				<button className='btn bg-blue-blue btn-border-blue flex justify-center items-center gap-2'>
					Grabar
					<FaCheck />
				</button>
				<button className='btn bg-blue-blue btn-border-blue flex justify-center items-center gap-2'>
					Borrar
					<FaTrash />
				</button>
				<button className='btn bg-blue-blue btn-border-blue flex justify-center items-center gap-2'>
					Anular
					<FaBan />
				</button>
				<button className='btn bg-blue-blue btn-border-blue flex items-center gap-2'>
					Imprimir
					<FaPrint />
				</button>
			</div>
		</Popup>
	)
}

export default EditChecksPopup

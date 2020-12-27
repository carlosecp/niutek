// React and Router Stuff
import React from 'react'
// Extra libraries
import { Formik, Form } from 'formik'
import { Text } from '../../../utils/forms'
import Table from '../../../utils/tables'
import Popup from '../../../utils/tables/Popup'

const NewPurchasePopup = ({ togglePopup }) => {
	const headers = []

	const rows = [{}]

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
							Entregar Cheque
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
								newLine={true}
							/>
							<Text
								name='cantidad'
								size='md'
								placeholder='Monto'
								label='Monto'
								type='number'
							/>
							<Text
								name='cantidad_letras'
								size='md'
								placeholder='Monto'
								label='Descripción del Monto'
							/>
							<Text
								name='concepto'
								size='md'
								placeholder='Concepto'
								label='Concepto'
								isTextArea
							/>
							<Text
								name='entregar'
								size='md'
								placeholder='Entregar'
								label='Destinario'
							/>
							<Text
								name='cedula'
								size='md'
								placeholder='Cédula'
								label='Cédula'
							/>
                            <Text
								name='fecha'
								size='md'
								placeholder='Fecha'
								label='Fecha'
							/>
						</div>
						<div className='my-8'>
							<Table headers={headers} rows={rows} />
						</div>
						<div className='mt-6 flex gap-2 justify-center'>
							<button className='btn bg-blue-blue btn-border-blue'>
								Entregar cheque
							</button>
							<button className='btn bg-blue-blue btn-border-blue'>
								Salir
							</button>
						</div>
					</div>
				</Form>
			</Formik>
		</Popup>
	)
}

export default NewPurchasePopup

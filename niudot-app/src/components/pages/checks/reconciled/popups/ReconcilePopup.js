// React and Router Stuff
import React from 'react'
// Extra libraries
import { Formik, Form } from 'formik'
import { Dropdown, Text } from '../../../utils/forms'
import Table from '../../../utils/tables'
import Popup from '../../../utils/tables/Popup'

const ReconcilePopup = ({ togglePopup }) => {
	const headers = []

	const rows = []

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
							Conciliar Cheque
						</h2>
						<div className='form-grid-layout'>
							<Text name='fecha' size='md' placeholder='Fecha' label='Fecha' />
							<Text
								name='numero_cheque'
								size='md'
								placeholder='No. Cheque'
								label='No. Cheque'
							/>
							<Dropdown name='moneda' size='md' label='Moneda'>
								<option value=''>-------</option>
								<option value='cordoba'>Córdoba</option>
								<option value='colon'>Colón</option>
							</Dropdown>
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
								name='cantidad_en_letras'
								size='md'
								placeholder='Cantidad en letras'
								label='Monto'
							/>

							<Text
								name='concepto'
								size='lg'
								placeholder='Concepto'
                                label='Concepto'
                                isTextArea
							/>
						</div>
					</div>
				</Form>
			</Formik>
		</Popup>
	)
}

export default ReconcilePopup

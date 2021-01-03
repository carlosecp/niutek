// React and Router Stuff
import React from 'react'
// Extra libraries
import { Formik, Form } from 'formik'
import { Text } from '../../utils/forms'
import { FaPrint, FaReceipt } from 'react-icons/fa'
// Other Components
import Popup from '../../utils/tables/Popup'

const EditChecksPopup = ({ togglePopup }) => {
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
								value={10287}
								disabled
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
								value={'COGUMESA'}
								disabled
							/>
							<Text
								name='cantidad'
								size='md'
								placeholder='Monto'
								label='Monto'
								type='number'
								value={46033.54}
								disabled
							/>
							<Text
								name='cantidad'
								size='md'
								placeholder='Monto'
								label='Descripción del Monto'
							/>
							<Text
								isTextArea={true}
								name='cantidad'
								size='lg'
								placeholder='Monto'
								label='Por concepto de:'
								value={
									'Compra de saborizante en polvos y liquidos, según orden de pago No. 1667 enviada por SOLKA.'
								}
								disabled
							/>
						</div>
					</div>
				</Form>
			</Formik>
			<div className='mx-4 mb-6 flex gap-2 justify-center flex-wrap'>
				<button className='btn bg-blue-blue btn-border-blue flex justify-center items-center gap-2'>
					Conciliar
					<FaReceipt />
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

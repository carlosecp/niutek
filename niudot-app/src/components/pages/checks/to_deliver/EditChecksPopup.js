// React and Router Stuff
import React from 'react'
// Extra libraries
import { Formik, Form } from 'formik'
import { Dropdown, Text } from '../../utils/forms'
import { FaBan, FaCheck, FaPrint, FaTrash } from 'react-icons/fa'
// Other Components
import Popup from '../../utils/tables/Popup'

const PrintChecksPopup = ({ togglePopup }) => {
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
								newLine={true}
								disabled
								value={'ALCALDÍA MUNICIPAL DE NINDIRÍ'}
							/>
							<Text
								name='deliver_to'
								size='md'
								placeholder='Monto'
								label='Monto'
								type='number'
								value={1600.0}
								disabled
							/>
							<Text
								name='deliver_to'
								size='md'
								placeholder='Monto'
								label='Descripción del Monto'
							/>
							<Text
								isTextArea={true}
								name='concepto'
								size='lg'
								placeholder='Monto'
								label='Por concepto de'
								value={
									'Pago de servicio de recolecta de basura. Correspondiente al mes de Septiembre/20. Según orden de pago No.3273 enviada por SOLKA, S.A.'
								}
								disabled
							/>
							<Text
								name='deliver_to'
								size='lg'
								placeholder='Destinatario'
								label='Entregar a'
							/>
							<Text
								name='deliver_to'
								size='md'
								placeholder='Cédula'
								label='Cédula'
								newLine={true}
							/>
						</div>
					</div>
				</Form>
			</Formik>
			<div className='mx-4 mb-6 flex gap-2 justify-center flex-wrap'>
				<button className='btn bg-blue-blue btn-border-blue flex justify-center items-center gap-2'>
					Entregar
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

export default PrintChecksPopup

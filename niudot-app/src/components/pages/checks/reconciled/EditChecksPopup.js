// React and Router Stuff
import React, { useMemo } from 'react'
// Extra libraries
import { Formik, Form } from 'formik'
import { FaPrint } from 'react-icons/fa'
// Other Components
import Table from '../../utils/tables'
import Popup from '../../utils/tables/Popup'

const EditChecksPopup = ({ togglePopup }) => {
	const columns = useMemo(() => [
		{ Header: 'Cuenta', accessor: 'account' },
		{ Header: 'Descripción', accessor: 'description' },
		{ Header: 'Débito', accessor: 'debit' },
		{ Header: 'Crédito', accessor: 'credit' }
	])

	const data = [
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
						<h2 className='mb-4 text-black-white text-xl font-bold'>
							Datos del Cheque
						</h2>
						<Table columns={columns} data={data} />
					</div>
				</Form>
			</Formik>
			<div className='mx-4 mb-6 flex gap-2 justify-center flex-wrap'>
				<button className='btn bg-blue-blue btn-border-blue flex items-center gap-2'>
					Imprimir
					<FaPrint />
				</button>
			</div>
		</Popup>
	)
}

export default EditChecksPopup

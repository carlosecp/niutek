// React and Router Stuff
import React from 'react'
// Extra libraries
import { Formik, Form } from 'formik'
import { Dropdown, Text } from '../../../utils/forms'
import Table from '../../../utils/tables'
import Popup from '../../../utils/tables/Popup'

const VoidPopup = ({ togglePopup }) => {
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
							<h2 className='text-black-white text-xl font-bold mt-12'>
								¿Está seguro que desea eliminar la anulación?
							</h2>


						<div className='mt-6 flex gap-2 justify-center'>
							<button className='btn bg-blue-blue btn-border-blue'>
								Si
							</button>
							<button className='btn bg-gray-cstm-10 btn-border-blue'>
								No
							</button>
						</div>
					</div>
				</Form>
			</Formik>
		</Popup>
	)
}

export default VoidPopup

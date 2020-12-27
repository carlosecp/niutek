// React and Router Stuff
import React, { useState } from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import CheckTable from './ChecksTable'
import SearchCheckForm from '../../utils/search/SearchCheckForm'
// Data
import { createValues, createValuesSchema } from './initialValues'
import Popup from '../../utils/tables/Popup'
import EditPopup from './EditPopup'

const initialValues = {
	...createValues
}

const validationSchema = Yup.object({
	...createValuesSchema
})

const CheckCreate = () => {
	const [showPopup, setShowPopup] = useState(false)
	const [currentPopup, setCurrentPopup] = useState('')

	const togglePopup = (popup) => {
		setCurrentPopup(popup)
		setShowPopup(!showPopup)
	}

	return (
		<>
			{showPopup && (
				<Popup togglePopup={togglePopup}>
					{currentPopup === 'edit' && <EditPopup />}
					{currentPopup === 'add' && <EditPopup />}
				</Popup>
			)}
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					alert(JSON.stringify(values, null, 2))
				}}
			>
				<Form className='table-section content-start'>
					<SearchCheckForm className='mx-0 p-8' />
					<CheckTable popup={EditPopup} togglePopup={togglePopup} />
					<div className='mt-6 flex gap-2 justify-center flex-wrap'>
						<div className='btn flex items-center bg-blue-blue btn-border-blue'>
							Agregar
						</div>
						<div className='btn flex items-center bg-blue-blue btn-border-blue'>
							Borrar
						</div>
						<div className='btn flex items-center bg-blue-blue btn-border-blue'>
							Anular
						</div>
						<div className='btn flex items-center bg-blue-blue btn-border-blue'>
							Imprimir
						</div>
					</div>
				</Form>
			</Formik>
		</>
	)
}

export default CheckCreate

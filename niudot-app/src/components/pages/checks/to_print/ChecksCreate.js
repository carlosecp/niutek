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
import PopupForm from './PopupForm'

const initialValues = {
	...createValues
}

const validationSchema = Yup.object({
	...createValuesSchema
})

const CheckCreate = () => {
	const [showPopup, setShowPopup] = useState(false)

	const togglePopup = () => {
		setShowPopup(!showPopup)
	}

	return (
		<>
			{showPopup && (
				<Popup togglePopup={togglePopup}>
					<PopupForm />
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
					<CheckTable togglePopup={togglePopup} />
				</Form>
			</Formik>
		</>
	)
}

export default CheckCreate

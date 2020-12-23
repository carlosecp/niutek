// React and Router Stuff
import React from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import CheckTable from './ChecksTable'
import SearchCheckForm from '../../utils/search/SearchCheckForm'
// Data
import { createValues, createValuesSchema } from './initialValues'
import Popup from '../../utils/tables/Popup'

const initialValues = {
	...createValues
}

const validationSchema = Yup.object({
	...createValuesSchema
})

const CheckCreate = () => {
	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					alert(JSON.stringify(values, null, 2))
				}}
			>
				<Form className='table-section content-start'>
					<SearchCheckForm className='mx-0 p-8' />
					<CheckTable />
				</Form>
			</Formik>
		</>
	)
}

export default CheckCreate

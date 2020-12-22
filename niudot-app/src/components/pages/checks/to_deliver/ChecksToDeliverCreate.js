// React and Router Stuff
import React from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import SearchCheckForm from '../../utils/search/SearchCheckForm'
import ChecksToDeliverTable from './ChecksToDeliverTable'
// Data
import { createValues, createValuesSchema } from './initialValues'

const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

const ChecksToDeliverCreate = () => {
	return (
		<Formik
			/* initialValues={initialValues}
				validationSchema={validationSchema} */
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className='table-section content-start'>
				<SearchCheckForm className='mx-0 p-8' />
				<ChecksToDeliverTable />
			</Form>
		</Formik>
	)
}

export default ChecksToDeliverCreate

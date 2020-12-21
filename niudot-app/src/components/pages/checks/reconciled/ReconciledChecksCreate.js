// React and Router Stuff
import React from 'react'
// Extra libraries
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
// Other Components
import SearchCheckForm from '../../utils/SearchCheckForm'
import ReconciledChecksTable from './ReconciledChecksTable'
// Data
import { createValues, createValuesSchema } from './formInitialValues'

export const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

const ReconciledChecksCreate = () => {
	return (
		<Formik
			//initialValues={initialValues}
			//validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className='table-section content-start'>
				<SearchCheckForm className='mx-0 p-8' />
				<ReconciledChecksTable />
			</Form>
		</Formik>
	)
}

export default ReconciledChecksCreate

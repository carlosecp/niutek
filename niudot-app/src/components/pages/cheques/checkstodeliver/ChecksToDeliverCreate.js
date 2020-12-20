import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { createValues, createValuesSchema } from './formInitialValues'
import SearchCheckForm from '../../utils/SearchCheckForm'
import ChecksToDeliverTable from './ChecksToDeliverTable'

export const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

export default function ChecksToDeliverCreate() {
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

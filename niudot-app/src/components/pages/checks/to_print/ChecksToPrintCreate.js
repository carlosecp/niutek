// React and Router Stuff
import React from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import CheckTable from './ChecksToPrintTable'
import SearchCheckForm from '../../utils/search/SearchCheckForm'
// Data
import { createValues, createValuesSchema } from './initialValues'

const initialValues = {
	...createValues
}

const validationSchema = Yup.object({
	...createValuesSchema
})

const CheckCreate = () => {
	// We need to keep the table from resetting the pageIndex when we
	// Update data. So we can keep track of that flag with a ref.

	// When our cell renderer calls updateMyData, we'll use
	// the rowIndex, columnId and new value to update the
	// original data

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

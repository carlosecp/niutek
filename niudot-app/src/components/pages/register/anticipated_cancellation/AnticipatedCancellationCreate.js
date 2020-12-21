// React and Router Stuff
import React from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import CancelacionAnticipada from './CancelacionAnticipada'
// Data
import { createValues, createValuesSchema } from './initialValues'

const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

const AnticipatedCancellationCreate = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className='section'>
				<CancelacionAnticipada />
			</Form>
		</Formik>
	)
}

export default AnticipatedCancellationCreate

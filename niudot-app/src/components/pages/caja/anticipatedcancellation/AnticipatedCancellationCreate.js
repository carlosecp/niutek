import React from 'react'
import { Formik, Form } from 'formik'
import CancelacionAnticipada from './CancelacionAnticipada'
import * as Yup from 'yup'

import { createValues, createValuesSchema } from './formInitialValues'

export const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

function AnticipatedCancellationCreate() {
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

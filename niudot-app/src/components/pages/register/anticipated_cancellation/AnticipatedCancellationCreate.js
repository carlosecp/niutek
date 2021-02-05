import React from "react"

import * as Yup from "yup"
import { Formik, Form } from "formik"

import AnticipatedCancellation from "./AnticipatedCancellation"
// Data
import { createValues, createValuesSchema } from "./initialValues"

const initialValues = {
	...createValues,
}
const validationSchema = Yup.object({
	...createValuesSchema,
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
			<Form className="section">
				<AnticipatedCancellation />
			</Form>
		</Formik>
	)
}

export default AnticipatedCancellationCreate

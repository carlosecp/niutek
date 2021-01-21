import React from "react"

import * as Yup from "yup"
import { Formik, Form } from "formik"

import LoanSubscription from "./LoanSubscription"
// Data
import { createValues, createValuesSchema } from "./initialValues"

const initialValues = {
	...createValues,
}
const validationSchema = Yup.object({
	...createValuesSchema,
})

const LoanPaymentCreate = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className="section">
				<h2 className="text-black-white text-xl font-bold">
					Abono a Préstamo{" "}
				</h2>
				<LoanSubscription />
			</Form>
		</Formik>
	)
}

export default LoanPaymentCreate

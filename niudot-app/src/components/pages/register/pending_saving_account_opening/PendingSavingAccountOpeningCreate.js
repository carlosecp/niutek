import React from "react"

import * as Yup from "yup"
import { Formik, Form } from "formik"

import AccountOpening from "./AccountOpening"
// Data
import { createValues, createValuesSchema } from "./initialValues"

const initialValues = {
	...createValues,
}
const validationSchema = Yup.object({
	...createValuesSchema,
})

const PendingSavingAccountOpeningCreate = () => {
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
					Apertura de Cuenta de Ahorro Pendiente{" "}
				</h2>
				<AccountOpening />
			</Form>
		</Formik>
	)
}

export default PendingSavingAccountOpeningCreate

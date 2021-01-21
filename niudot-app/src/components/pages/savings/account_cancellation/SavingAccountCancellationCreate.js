import React from "react"

import * as Yup from "yup"
import { Formik, Form } from "formik"

// Data
import {
	createValues,
	createValuesSchema,
	principalesProveedores,
	origenFondos,
	refComercialesValues,
	refBancariasValues,
	refPersonales1Values,
	refPersonales2Values,
	accionistasMayoritarios,
} from "./initialValues"

const initialValues = {
	...createValues,
	...principalesProveedores,
	...origenFondos,
	...refComercialesValues,
	...refBancariasValues,
	...refPersonales1Values,
	...refPersonales2Values,
	...accionistasMayoritarios,
}

const validationSchema = Yup.object({
	...createValuesSchema,
})

const SavingAccountCancellationCreate = () => {
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
					Cancelación de Cuenta de Ahorro{" "}
				</h2>
			</Form>
		</Formik>
	)
}

export default SavingAccountCancellationCreate

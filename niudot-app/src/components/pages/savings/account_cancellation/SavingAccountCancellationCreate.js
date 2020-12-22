// React and Router Stuff
import React from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components

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
	accionistasMayoritarios
} from './initialValues'

const initialValues = {
	...createValues,
	...principalesProveedores,
	...origenFondos,
	...refComercialesValues,
	...refBancariasValues,
	...refPersonales1Values,
	...refPersonales2Values,
	...accionistasMayoritarios
}

const validationSchema = Yup.object({
	...createValuesSchema
})

export default function SavingAccountCancellationCreate() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className='section'>
				<h2 className='text-black-white text-xl font-bold'>
					Cancelación de Cuenta de Ahorro{' '}
				</h2>
				
			</Form>
		</Formik>
	)
}

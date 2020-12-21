// React and Router Stuff
import React from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import FixedTermCertificateOpening from './FixedTermCertificateOpening'
// Data
import { createValues, createValuesSchema } from './initialValues'

const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

const FixedTermCertificateOpeningCreate = () => {
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
					Apertura de Cuenta de Certificado a Plazo Fijo{' '}
				</h2>
				<FixedTermCertificateOpening />
			</Form>
		</Formik>
	)
}

export default FixedTermCertificateOpeningCreate

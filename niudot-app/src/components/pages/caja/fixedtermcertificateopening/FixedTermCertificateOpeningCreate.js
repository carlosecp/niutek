import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { createValues, createValuesSchema } from './formInitialValues'
import AperturaCertificadoPlazo from './AperturaCertificadoPlazo'

export const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

function FixedTermCertificateOpeningCreate() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className='form'>
				<h2 className='text-black-white text-xl font-bold'>
					Apertura de Cuenta de Certificado a Plazo Fijo{' '}
				</h2>
                <AperturaCertificadoPlazo />
			</Form>
		</Formik>
	)
}

export default FixedTermCertificateOpeningCreate


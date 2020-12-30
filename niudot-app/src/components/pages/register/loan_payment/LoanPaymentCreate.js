// React and Router Stuff
import React from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import LoanSubscription from './LoanSubscription'
// Data
import { createValues, createValuesSchema } from './initialValues'

const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
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
			<Form className='section'>
				<h2 className='text-black-white text-xl font-bold'>
					Abono a Préstamo{' '}
				</h2>
				<LoanSubscription />
			</Form>
		</Formik>
	)
}

export default LoanPaymentCreate

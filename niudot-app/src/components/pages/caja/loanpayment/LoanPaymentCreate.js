import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { createValues, createValuesSchema } from './formInitialValues'
import AbonoAPrestamo from './AbonoAPrestamo'

export const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

function LoanPaymentCreate() {
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
					Abono a Préstamo{' '}
				</h2>
                <AbonoAPrestamo />
                
			</Form>
		</Formik>
	)
}

export default LoanPaymentCreate


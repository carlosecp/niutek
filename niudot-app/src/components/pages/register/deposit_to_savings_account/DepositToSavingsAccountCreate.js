// React and Router Stuff
import React from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import DepositToSavingsAccount from './DepositToSavingsAccount'
// Data
import { createValues, createValuesSchema } from './initialValues'

const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

const DepositToSavingsAccountCreate = () => {
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
					Depósito a Cuenta de Ahorro{' '}
				</h2>
				<DepositToSavingsAccount />
			</Form>
		</Formik>
	)
}

export default DepositToSavingsAccountCreate

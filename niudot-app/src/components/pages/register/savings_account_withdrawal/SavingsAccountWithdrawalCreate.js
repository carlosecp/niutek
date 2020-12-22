// React and Router Stuff
import React from 'react'
// Extra libraries
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
// Other Components
import SavingsAccountWithdrawal from './SavingsAccountWithdrawal'
// Data
import { createValues, createValuesSchema } from './initialValues'

const initialValues = {
	...createValues
}

const validationSchema = Yup.object({
	...createValuesSchema
})

const SavingsAccountWithdrawalCreate = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className='section'>
				<SavingsAccountWithdrawal />
			</Form>
		</Formik>
	)
}

export default SavingsAccountWithdrawalCreate

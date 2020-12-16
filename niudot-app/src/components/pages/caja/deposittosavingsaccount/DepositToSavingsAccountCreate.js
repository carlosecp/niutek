import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { createValues, createValuesSchema } from './formInitialValues'
import DepositoACuentaDeAhorro from './DepositoACuentaDeAhorro'

export const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

export default function DepositToSavingsAccountCreate() {
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
					Depósito a Cuenta de Ahorro{' '}
				</h2>
                <DepositoACuentaDeAhorro />
			</Form>
		</Formik>
	)
}


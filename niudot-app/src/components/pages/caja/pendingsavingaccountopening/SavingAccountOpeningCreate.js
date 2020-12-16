import React from 'react'
import { Formik, Form } from 'formik'
import SubmitBtn from '../../utils/SubmitBtn'
import * as Yup from 'yup'

import { createValues, createValuesSchema } from './formInitialValues'
import AperturaDeCuenta from './AperturaDecuenta'

export const initialValues = {
	...createValues
}
const validationSchema = Yup.object({
	...createValuesSchema
})

function SavingAccountOpeningCreate() {
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
					Apertura de Cuenta de Ahorro Pendiente{' '}
				</h2>
                <AperturaDeCuenta />
			</Form>
		</Formik>
	)
}

export default SavingAccountOpeningCreate

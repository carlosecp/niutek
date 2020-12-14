import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { FormTextInput } from '../pages/utils/formikComponentsEndpoint'

const initialValues = {
	name: '',
	email: '',
	password: '',
	password_conf: ''
}

const validationSchema = Yup.object({
	name: Yup.string().max(8)
})

function Register() {
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => {
				console.log(values)
			}}
		>
			<Form>
				<FormTextInput
					name='name'
					size='sm'
					placeholder='Teléfono 2'
					label='Teléfono 2'
				/>
				<input type='submit' value='Hola' />
			</Form>
		</Formik>
	)
}

export default Register

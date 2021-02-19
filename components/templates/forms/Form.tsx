import * as React from 'react'
import { Formik, Form as FormikForm } from 'formik'

interface Props<Data, ValidationSchema> {
	values: Data
	validations: ValidationSchema
	children: React.ReactNode
}

const Form = <Data, ValidationSchema>({
	values,
	validations,
	children,
}: Props<Data, ValidationSchema>) => {
	return (
		<Formik
			initialValues={values}
			enableReinitialize
			validationSchema={validations}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true)
				console.log(values)
				setSubmitting(false)
			}}
		>
			<FormikForm className='flex-1 max-w-3xl container p-4 flex flex-col gap-6 no-scrollbar'>
				{children}
			</FormikForm>
		</Formik>
	)
}

export default Form

import * as React from 'react'
import { Formik, Form as FormikForm } from 'formik'
import LogErrors from '@/lib/LogErrors'

interface Props<Values, ValidationSchema> {
	values: Values
	validations: ValidationSchema
	writeData: (x: Values) => void
	children: React.ReactNode
}

const Form = <Values, ValidationSchema>(
	props: Props<Values, ValidationSchema>
) => {
	return (
		<Formik
			initialValues={props.values}
			enableReinitialize
			validationSchema={props.validations}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true)
				props.writeData(values)
				setSubmitting(false)
			}}
		>
			{({ errors }) => (
				<FormikForm className='flex-1 max-w-3xl container px-4 flex flex-col gap-6 no-scrollbar'>
					{props.children}
					<LogErrors errors={errors} />
				</FormikForm>
			)}
		</Formik>
	)
}

export default Form

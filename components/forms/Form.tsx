import type { GlobalValues } from '../../lib/interfaces'
import * as React from 'react'
import { Formik, Form as FormikForm } from 'formik'
import LogErrors from '../../lib/LogErrors'

interface Props<Values, ValidationSchema> {
	accessKey: string
	children: React.ReactNode
	currentId: string | number | null
	validations: ValidationSchema
	values: Values
	writeData: (values: Values, key: string) => void
}

const Form = <Values extends GlobalValues, ValidationSchema>(
	props: Props<Values, ValidationSchema>
) => {
	return (
		<Formik
			initialValues={props.values}
			enableReinitialize
			validationSchema={props.validations}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true)
				props.writeData(values, props.accessKey)
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

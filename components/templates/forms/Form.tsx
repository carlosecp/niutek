import * as React from 'react'
import { Formik, Form as FormikForm } from 'formik'
import LogErrors from '../../../utils/LogErrors'

interface Props<Data, ValidationSchema> {
	values: Data
	validations: ValidationSchema
	writeData: (values: Data) => void
	children: React.ReactNode
}

const Form = <Data, ValidationSchema>(props: Props<Data, ValidationSchema>) => {
	return (
		<Formik
			initialValues={props.values}
			enableReinitialize
			validationSchema={props.validations}
			onSubmit={(values, { setSubmitting }) => {
				console.table(values)

				setSubmitting(true)
				props.writeData(values)
				setSubmitting(false)
			}}
		>
			{({ errors }) => (
				<FormikForm className="flex-1 max-w-3xl container p-4 flex flex-col gap-6 no-scrollbar">
					{props.children}
					<LogErrors errors={errors} />
				</FormikForm>
			)}
		</Formik>
	)
}

export default Form

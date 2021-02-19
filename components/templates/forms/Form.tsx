import { ReactNode } from 'react'
import { Formik, Form as FormikForm } from 'formik'

interface Props<Values, Validations> {
	values: Values
	data: Values
	validations: Validations
	children: ReactNode
}

const Form = <Values, Validations>({
	values,
	data,
	validations,
	children,
}: Props<Values, Validations>) => {
	return (
		<Formik
			initialValues={data || values}
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

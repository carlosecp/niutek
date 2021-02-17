import { ReactNode } from 'react'
import { Formik, Form as FormikForm } from 'formik'
import IndexPage from '../../layout/IndexPage'

interface Props<Values, Validations> {
	data: {
		values: Values
		validations: Validations
	}
	children: ReactNode
}

// T: InitialValues del formulario a mostrar.
const Form = <Values, Validations>({
	data,
	children,
}: Props<Values, Validations>) => {
	return (
		<IndexPage>
			<Formik
				initialValues={data.values}
				validationSchema={data.validations}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(true)
					console.log(values)
					setSubmitting(false)
				}}
			>
				<FormikForm className='flex flex-col gap-6'>
					{children}
				</FormikForm>
			</Formik>
		</IndexPage>
	)
}

export default Form

import { ReactNode } from 'react'
import { Formik, Form } from 'formik'
import { validationSchemas } from '../../../interfaces'
import IndexPage from '../../IndexPage'

interface Props<T> {
	initialValues: {
		[x: string]: any
	}
	validationSchema: T
	children: ReactNode
}

const FormPage = <T extends validationSchemas>({
	initialValues,
	validationSchema,
	children,
}: Props<T>) => {
	return (
		<IndexPage>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(true)
					console.log(values)
					setTimeout(() => {
						setSubmitting(false)
					}, 5000)
				}}
			>
				<Form className='flex flex-col gap-6'>{children}</Form>
			</Formik>
		</IndexPage>
	)
}

export default FormPage

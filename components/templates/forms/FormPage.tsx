import type { GlobalValidationSchemas } from '../../../interfaces/formValues'
import { ReactNode } from 'react'
import { Formik, Form } from 'formik'
import IndexPage from '../../layout/IndexPage'

interface Props<T> {
	initialValues: {
		[x: string]: any
	}
	validationSchema: T
	children: ReactNode
}

// A este component se le debe pasar alguno de los validation schemas de todos los disponibles entre todas las paginas, de ahi el Global.
const FormPage = <T extends GlobalValidationSchemas>({
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

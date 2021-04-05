import * as React from 'react'
import Form from '@/components/forms/NewForm'

interface Props<Values, Validations> {
	children?: React.ReactNode
	formProps: {
		values: Values
		validations: Validations
		writeData: (x: Values) => void
	}
}

const FormPage = <Values, Validations>(props: Props<Values, Validations>) => {
	return (
		<main className='sm:ml-64 relative bg-light'>
			<div className='flex flex-col py-4 lg:pr-64'>
				<Form<Values, Validations> {...props.formProps}>{props.children}</Form>
			</div>
		</main>
	)
}

export default FormPage

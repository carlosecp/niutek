import React from 'react'
import { Formik, Form } from 'formik'
import SavingAccounts from './SavingAccounts'


export default function ProductsCreate() {
	return (
		<Formik
			/* initialValues={...}
        validationSchema={...} */
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form>
				<SavingAccounts/>
			</Form>
		</Formik>
	)
}

import React from 'react'
import { Formik, Form } from 'formik'
import SavingAccounts from './SavingAccounts'
import TimeDeposits from './TimeDeposits'
import SubmitBtn from '../utils/SubmitBtn'
import CreditProducts from './CreditProducts'

import {
	createSavingAccountsSchema,
	savingAccounts,
	timeDeposits,
	creditProducts
} from './formInitialValues'

export const initialValues = {
	...savingAccounts,
	...timeDeposits,
	...creditProducts
}

const validationSchema = {
	...createSavingAccountsSchema
}

export default function ProductsCreate() {
	return (
		<>
			<Formik
				initialValues={initialValues}
				validationSchema={createSavingAccountsSchema}
				onSubmit={(values) => {
					alert(JSON.stringify(values, null, 2))
				}}
			>
				<Form>
					<SavingAccounts />
					<TimeDeposits />
					<CreditProducts />
					<SubmitBtn />
				</Form>
			</Formik>
		</>
	)
}

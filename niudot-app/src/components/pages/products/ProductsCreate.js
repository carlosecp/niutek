import React from "react"

import { Formik, Form } from "formik"
import * as Yup from "yup"

import SavingAccounts from "./SavingAccounts"
import TimeDeposits from "./TimeDeposits"
import SubmitBtn from "../utils/SubmitBtn"
import CreditProducts from "./CreditProducts"
// Data
import {
	createSavingAccountsSchema,
	savingAccounts,
	timeDeposits,
	creditProducts,
} from "./initialValues"

const initialValues = {
	...savingAccounts,
	...timeDeposits,
	...creditProducts,
}

const validationSchema = Yup.object({
	...createSavingAccountsSchema,
})

const ProductsCreate = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className="section">
				<SavingAccounts />
				<TimeDeposits />
				<CreditProducts />
				<SubmitBtn />
			</Form>
		</Formik>
	)
}

export default ProductsCreate

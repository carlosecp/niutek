// React
import React, { useContext, useEffect } from "react"
import { Formik, Form } from "formik"
import routesContext from "../../context/routes/routesContext"
import ProfileAccessOptions from "./ProfileAccessOptions"

const initialValues = {
	register_anticipated_cancellation: false,
	register_saving_account: false,
	register_fixed_term_certificate: false,
	register_loan_payment: false,
	register_deposit: false,
	register_withdrawal: false,

	clients_natural_person: false,
	clients_legal_person: false,

	savings_account_opening: false,
	savings_assignment_of_payment_order_stubs: false,
	savings_account_cancellation: false,
	savings_fixed_term_deposit_opening: false,
	savings_early_cancellation_fixed_term_deposit: false,

	products: false,

	credit_products: false,
	credit_resolution: false,
	credit_request: false,

	checks_to_print: false,
	checks_to_deliver: false,
	checks_to_be_reconciled: false,
	checks_reconciled: false,
	checks_voided: false,
}

const RegisterUser = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage("Crear Nuevo Perfil")
		// eslint-disable-next-line
	}, [])

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className="section">
				<ProfileAccessOptions />
				<button
					type="submit"
					className="bg-blue-blue btn btn-border-blue"
				>
					Guardar
				</button>
			</Form>
		</Formik>
	)
}

export default RegisterUser

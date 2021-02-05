import React, { useContext, useEffect } from "react"

import routesContext from "../../../../context/routes/routesContext"

import SearchClient from "../../utils/search/users/SearchClient"
import LoanPaymentCreate from "./LoanPaymentCreate"

const LoanPayment = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage("Abono a Préstamo")
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchClient />
			<LoanPaymentCreate />
		</>
	)
}

export default LoanPayment

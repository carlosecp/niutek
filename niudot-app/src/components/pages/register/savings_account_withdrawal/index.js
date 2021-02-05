import React, { useContext, useEffect } from "react"

import routesContext from "../../../../context/routes/routesContext"

import SearchClient from "../../utils/search/users/SearchClient"
import SavingsAccountWithdrawalCreate from "./SavingsAccountWithdrawalCreate"

const SavingsAccountWithdrawal = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage("Retiro a Cuenta de Ahorro")
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchClient />
			<SavingsAccountWithdrawalCreate />
		</>
	)
}

export default SavingsAccountWithdrawal

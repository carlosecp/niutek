import React, { useContext, useEffect } from "react"

import routesContext from "../../../../context/routes/routesContext"

import CreditFormalizationCreate from "./CreditFormalizationCreate"
import SearchClient from "../../utils/search/users/SearchClient"

const CreditFormalization = () => {
	const { changePage } = useContext(routesContext)
	useEffect(() => {
		// Esto es para el context de los titulos
		changePage("Formalizacion de Crédito")
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchClient />
			<CreditFormalizationCreate />
		</>
	)
}

export default CreditFormalization

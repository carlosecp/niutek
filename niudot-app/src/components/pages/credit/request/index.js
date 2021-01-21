import React, { useContext, useEffect } from "react"
import routesContext from "../../../../context/routes/routesContext"
import CreditRequestCreate from "./CreditRequestCreate"
import SearchClient from "../../utils/search/users/SearchClient"
const CreditRequest = () => {
	const { changePage } = useContext(routesContext)
	useEffect(() => {
		// Esto es para el context de los titulos
		changePage("Solicitud de Crédito")

		// eslint-disable-next-line
	}, [])

	return [<SearchClient />, <CreditRequestCreate />]
}

export default CreditRequest

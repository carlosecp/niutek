import React, { useContext, useEffect } from "react"

import routesContext from "../../../../context/routes/routesContext"

import SearchClient from "../../utils/search/users/SearchClient"
import PendingSavingAccountOpeningCreate from "./PendingSavingAccountOpeningCreate"

function PendingSavingAccountOpening() {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage("Apertura de Cuenta de Ahorro Pendiente")
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchClient />
			<PendingSavingAccountOpeningCreate />
		</>
	)
}

export default PendingSavingAccountOpening

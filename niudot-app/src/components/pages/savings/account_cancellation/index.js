import React, { useContext, useEffect, useState } from "react"

import routesContext from "../../../../context/routes/routesContext"

import SearchClient from "../../utils/search/users/SearchClient"
import CreateNewClientBtn from "../../utils/CreateNewClientBtn"
import SavingAccountCancellationCreate from "./SavingAccountCancellationCreate"

const SavingAccountCancellation = () => {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage("Cancelación de Cuenta de Ahorro")
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchClient />
			{showCreateFormButton ? (
				<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
			) : (
				<SavingAccountCancellationCreate />
			)}
		</>
	)
}

export default SavingAccountCancellation

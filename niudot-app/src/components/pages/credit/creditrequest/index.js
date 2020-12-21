import React, { useState, useContext, useEffect } from 'react'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import Alerts from '../../alerts/Alerts'
import routesContext from '../../../../context/routes/routesContext'
import CreditRequestCreate from './CreditRequestCreate'

export default function CreditRequest() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)
	useEffect(() => {

		// Esto es para el context de los titulos
		changePage('Solicitud de Crédito')

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<div>
				<Alerts />
				<SearchUserForm/>
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<CreditRequestCreate />
				)}
			</div>
		</>
	)
}

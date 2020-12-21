import React, { useState, useContext, useEffect } from 'react'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import Alerts from '../../alerts/Alerts'
import routesContext from '../../../../context/routes/routesContext'
import CreditProductsCreate from './CreditProductsCreate'

export default function CreditProducts() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)
	useEffect(() => {

		// Esto es para el context de los titulos
		changePage('Productos de Crédito')

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<div>
				<Alerts />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<CreditProductsCreate />
				)}
			</div>
		</>
	)
}

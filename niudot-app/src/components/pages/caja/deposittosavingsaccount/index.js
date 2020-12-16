import React, { useState, useContext, useEffect } from 'react'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import Alerts from '../../alerts/Alerts'
import routesContext from '../../../../context/routes/routesContext'
import DepositToSavingsAccountCreate from './DepositToSavingsAccountCreate'

export default function DepositToSavingsAccount() {

	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Depósito a Cuenta de Ahorro')
	}, [])

    const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	return (
		<>
			<div>
				<Alerts />
				<SearchUserForm />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<DepositToSavingsAccountCreate />
				)}
			</div>
		</>
	)
}


import React, { useState, useContext, useEffect } from 'react'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import Alerts from '../../alerts/Alerts'
import routesContext from '../../../../context/routes/routesContext'
import SavingsAccountWithdrawalCreate from './SavingsAccountWithdrawalCreate'

export default function SavingsAccountWithdrawal() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Retiro a Cuenta de Ahorro')
	}, [])

	return (
		<>
			<div>
				<Alerts />
				<SearchUserForm />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<SavingsAccountWithdrawalCreate />
				)}
			</div>
		</>
	)
}


// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/search/SearchUserForm'
import SavingsAccountWithdrawalCreate from './SavingsAccountWithdrawalCreate'

const SavingsAccountWithdrawal = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Retiro a Cuenta de Ahorro')
	}, [])

	return (
		<>
			<SearchUserForm />
			<SavingsAccountWithdrawalCreate />
		</>
	)
}

export default SavingsAccountWithdrawal

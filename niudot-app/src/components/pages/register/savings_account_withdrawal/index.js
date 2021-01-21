// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchClient from '../../utils/search/users/SearchClient'
import SavingsAccountWithdrawalCreate from './SavingsAccountWithdrawalCreate'

const SavingsAccountWithdrawal = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Retiro a Cuenta de Ahorro')
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

// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchClient from '../../utils/search/users/SearchClient'
import DepositToSavingsAccountCreate from './DepositToSavingsAccountCreate'

const DepositToSavingsAccount = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Depósito a Cuenta de Ahorro')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchClient />
			<DepositToSavingsAccountCreate />
		</>
	)
}

export default DepositToSavingsAccount

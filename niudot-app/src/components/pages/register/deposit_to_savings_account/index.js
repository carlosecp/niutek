// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/search/SearchUserForm'
import DepositToSavingsAccountCreate from './DepositToSavingsAccountCreate'

const DepositToSavingsAccount = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Depósito a Cuenta de Ahorro')
	}, [])

	return (
		<>
			<SearchUserForm />
			<DepositToSavingsAccountCreate />
		</>
	)
}

export default DepositToSavingsAccount

// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/search/users/SearchUserForm'
import DepositToSavingsAccountCreate from './DepositToSavingsAccountCreate'

const DepositToSavingsAccount = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Depósito a Cuenta de Ahorro')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchUserForm />
			<DepositToSavingsAccountCreate />
		</>
	)
}

export default DepositToSavingsAccount

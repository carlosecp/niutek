import React, { useContext, useEffect } from 'react'
import SearchUserForm from '../../utils/SearchUserForm'
import routesContext from '../../../../context/routes/routesContext'
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

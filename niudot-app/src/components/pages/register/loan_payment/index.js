// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/SearchUserForm'
import LoanPaymentCreate from './LoanPaymentCreate'

function LoanPayment() {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Abono a Préstamo')
	}, [])

	return (
		<>
			<SearchUserForm />
			<LoanPaymentCreate />
		</>
	)
}

export default LoanPayment

// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/search/SearchUserForm'
import LoanPaymentCreate from './LoanPaymentCreate'

const LoanPayment = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Abono a Préstamo')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchUserForm />
			<LoanPaymentCreate />
		</>
	)
}

export default LoanPayment

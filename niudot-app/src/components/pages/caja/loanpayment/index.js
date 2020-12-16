import React, { useState, useContext, useEffect } from 'react'

import PageMenu from '../../utils/PageSectionMenu'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import { PageContext } from '../../../../context/sections/SectionsContext'
import Alerts from '../../alerts/Alerts'
import routesContext from '../../../../context/routes/routesContext'
import LoanPaymentCreate from './LoanPaymentCreate'

function LoanPayment() {

	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Abono a Préstamo')
	}, [])

	return (
		<>
			<div>
				<Alerts />
				<SearchUserForm />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<LoanPaymentCreate />
				)}
			</div>
		</>
	)
}

export default LoanPayment


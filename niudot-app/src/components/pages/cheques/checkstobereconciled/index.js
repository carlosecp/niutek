import React, { useState, useContext, useEffect } from 'react'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import Alerts from '../../alerts/Alerts'
import routesContext from '../../../../context/routes/routesContext'
import ChecksToBeReconciledCreate from './ChecksToBeReconciledCreate'

export default function ChecksToBeReconciled() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Por Conciliar')
	}, [])

	return (
		<>
			<div>
				<Alerts />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<ChecksToBeReconciledCreate />
				)}
			</div>
		</>
	)
}

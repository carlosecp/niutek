import React, { useState, useContext, useEffect } from 'react'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import Alerts from '../../alerts/Alerts'
import routesContext from '../../../../context/routes/routesContext'
import ReconciledChecksCreate from './ReconciledChecksCreate'

export default function ReconciledChecks() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Conciliados')
	}, [])

	return (
		<>
			<div>
				<Alerts />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<ReconciledChecksCreate />
				)}
			</div>
		</>
	)
}

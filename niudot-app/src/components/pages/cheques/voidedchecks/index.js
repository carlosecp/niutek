import React, { useState, useContext, useEffect } from 'react'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import Alerts from '../../alerts/Alerts'
import routesContext from '../../../../context/routes/routesContext'
import VoidedChecksCreate from './VoidedChecksCreate'

export default function VoidedChecks() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Anulados')
	}, [])

	return (
		<>
			<div>
				<Alerts />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<VoidedChecksCreate />
				)}
			</div>
		</>
	)
}

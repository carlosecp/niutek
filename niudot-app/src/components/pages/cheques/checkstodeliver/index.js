import React, { useState, useContext, useEffect } from 'react'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import Alerts from '../../alerts/Alerts'
import routesContext from '../../../../context/routes/routesContext'
import ChecksToDeliverCreate from './ChecksToDeliverCreate'

export default function ChecksToDeliver() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Por Entregar')
	}, [])

	return (
		<>
			<div>
				<Alerts />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<ChecksToDeliverCreate />
				)}
			</div>
		</>
	)
}

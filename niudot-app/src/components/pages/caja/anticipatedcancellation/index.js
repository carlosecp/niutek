import React, { useState, useContext, useEffect } from 'react'

import PageMenu from '../../utils/PageSectionMenu'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import { PageContext } from '../../../../context/sections/SectionsContext'
import Alerts from '../../alerts/Alerts'
import AnticipatedCancellationCreate from './AnticipatedCancellationCreate'
import routesContext from '../../../../context/routes/routesContext'

function AnticipatedCancellation() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cancelación Anticipada')
	}, [])

	return (
		<>
			<div >
				<Alerts />
				<SearchUserForm />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<AnticipatedCancellationCreate />
				)}
			</div>
		</>
	)
}

export default AnticipatedCancellation

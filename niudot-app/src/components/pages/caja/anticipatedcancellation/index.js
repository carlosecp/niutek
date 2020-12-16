import React, { useState, useContext, useEffect } from 'react'

import PageMenu from '../../utils/PageSectionMenu'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import { PageContext } from '../../../../context/sections/SectionsContext'
import Alerts from '../../alerts/Alerts'
import AnticipatedCancellationCreate from './AnticipatedCancellationCreate'

function AnticipatedCancellation() {
	
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	return (
		<>
			<div>
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

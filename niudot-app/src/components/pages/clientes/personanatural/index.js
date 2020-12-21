import React, { useState, useContext, useEffect } from 'react'

import PageMenu from '../../utils/PageSectionMenu'
import SearchUserForm from '../../utils/SearchUserForm'
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import PersonaNaturalCreate from './PersonaNaturalCreate'
import { PageContext } from '../../../../context/sections/SectionsContext'
import Alerts from '../../alerts/Alerts'
import routesContext from '../../../../context/routes/routesContext'

function PersonaNatural() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)
	useEffect(() => {

		// Esto es para el context de los titulos
		changePage('Persona Natural')

		// eslint-disable-next-line
	}, [])

	return (
		<>
			<div>
				<Alerts />
				<SearchUserForm />
				{showCreateFormButton ? (
					<CreateNewClientBtn setShowForm={setShowCreateFormButton} />
				) : (
					<PersonaNaturalCreate />
				)}
			</div>
		</>
	)
}

export default PersonaNatural

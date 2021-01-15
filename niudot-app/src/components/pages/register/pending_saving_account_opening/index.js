// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/search/users/SearchUserForm'
import PendingSavingAccountOpeningCreate from './PendingSavingAccountOpeningCreate'

function PendingSavingAccountOpening() {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Apertura de Cuenta de Ahorro Pendiente')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchUserForm />
			<PendingSavingAccountOpeningCreate />
		</>
	)
}

export default PendingSavingAccountOpening

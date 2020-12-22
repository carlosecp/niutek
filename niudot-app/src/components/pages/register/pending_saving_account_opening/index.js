// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/search/SearchUserForm'
import PendingSavingAccountOpeningCreate from './PendingSavingAccountOpeningCreate'

function PendingSavingAccountOpening() {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Apertura de Cuenta de Ahorro Pendiente')
	}, [])

	return (
		<>
			<SearchUserForm />
			<PendingSavingAccountOpeningCreate />
		</>
	)
}

export default PendingSavingAccountOpening

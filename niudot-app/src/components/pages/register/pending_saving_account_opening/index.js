// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/SearchUserForm'
import SavingAccountOpeningCreate from './SavingAccountOpeningCreate'

function SavingAccountOpening() {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Apertura de Cuenta de Ahorro Pendiente')
	}, [])

	return (
		<>
			<SearchUserForm />
			<SavingAccountOpeningCreate />
		</>
	)
}

export default SavingAccountOpening

// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import CreditResolutionCreate from './CreditResolutionCreate'

const CreditResolution = () => {
	const { changePage } = useContext(routesContext)
	useEffect(() => {
		// Esto es para el context de los titulos
		changePage('Resolucion de Crédito')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchUserForm />
			<CreditResolutionCreate />
		</>
	)
}

export default CreditResolution

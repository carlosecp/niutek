import React, { useState, useContext, useEffect } from 'react'
import routesContext from '../../../../context/routes/routesContext'
import CreditResolutionCreate from './CreditResolutionCreate'

export default function CreditResolution() {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)

	const { changePage } = useContext(routesContext)
	useEffect(() => {

		// Esto es para el context de los titulos
		changePage('Resolucion de Crédito')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchUserForm/>
			<CreditResolutionCreate/>
		</>
	)
}

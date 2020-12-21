// React and Router Stuff
import React, { useContext, useEffect } from 'react'
import routesContext from '../../../../context/routes/routesContext'
import CreditRequestCreate from './CreditRequestCreate'

const CreditRequest = () => {
	const { changePage } = useContext(routesContext)
	useEffect(() => {
		// Esto es para el context de los titulos
		changePage('Solicitud de Crédito')

		// eslint-disable-next-line
	}, [])

	return <CreditRequestCreate />
}

export default CreditRequest

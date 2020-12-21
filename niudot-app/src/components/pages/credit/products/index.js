// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import CreditProductsCreate from './CreditProductsCreate'

const CreditProducts = () => {
	const { changePage } = useContext(routesContext)
	useEffect(() => {
		// Esto es para el context de los titulos
		changePage('Productos de Crédito')

		// eslint-disable-next-line
	}, [])

	return <CreditProductsCreate />
}

export default CreditProducts

// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Other Components
import ChecksCreate from './ChecksCreate'
// Context
import routesContext from '../../../../context/routes/routesContext'

const ChecksToPrint = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Por Imprimir')
	}, [])

	return <ChecksCreate />
}

export default ChecksToPrint

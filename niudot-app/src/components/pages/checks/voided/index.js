// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import VoidedChecksCreate from './VoidedChecksCreate'

const VoidedChecks = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Anulados')
	}, [])

	return <VoidedChecksCreate />
}

export default VoidedChecks

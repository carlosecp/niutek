// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import ReconciledChecksCreate from './ReconciledChecksCreate'

const ReconciledChecks = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Conciliados')
	}, [])

	return <ReconciledChecksCreate />
}

export default ReconciledChecks

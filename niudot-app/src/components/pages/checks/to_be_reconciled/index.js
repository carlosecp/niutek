// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import ChecksToBeReconciledCreate from './ChecksToBeReconciledCreate'

const ChecksToBeReconciled = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Por Conciliar')
	}, [])

	return <ChecksToBeReconciledCreate />
}

export default ChecksToBeReconciled

// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Other Components
import ChecksToDeliverCreate from './ChecksToDeliverCreate'
// Context
import routesContext from '../../../../context/routes/routesContext'

const ChecksToDeliver = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Por Entregar')
	}, [])

	return <ChecksToDeliverCreate />
}

export default ChecksToDeliver

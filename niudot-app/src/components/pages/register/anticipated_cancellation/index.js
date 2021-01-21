// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchClient from '../../utils/search/users/SearchClient'
import AnticipatedCancellationCreate from './AnticipatedCancellationCreate'

const AnticipatedCancellation = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cancelación Anticipada')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchClient />
			<AnticipatedCancellationCreate />
		</>
	)
}

export default AnticipatedCancellation

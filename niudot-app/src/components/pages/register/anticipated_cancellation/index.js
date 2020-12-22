// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import SearchUserForm from '../../utils/search/SearchUserForm'
import AnticipatedCancellationCreate from './AnticipatedCancellationCreate'

const AnticipatedCancellation = () => {
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cancelación Anticipada')
	}, [])

	return (
		<>
			<SearchUserForm />
			<AnticipatedCancellationCreate />
		</>
	)
}

export default AnticipatedCancellation

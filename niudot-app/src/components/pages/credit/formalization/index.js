// React and Router Stuff
import React, { useContext, useEffect } from 'react'
// Context
import routesContext from '../../../../context/routes/routesContext'
// Other Components
import CreditFormalizationCreate from './CreditFormalizationCreate'
import SearchUserForm from '../../utils/search/SearchUserForm'

const CreditFormalization = () => {
	const { changePage } = useContext(routesContext)
	useEffect(() => {
		// Esto es para el context de los titulos
		changePage('Formalizacion de Crédito')
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<SearchUserForm />
			<CreditFormalizationCreate />
		</>
	)
}

export default CreditFormalization

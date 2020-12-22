// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import CreateNewClientBtn from '../../utils/CreateNewClientBtn'
import CheckCreate from './ChecksToPrintCreate'
// Context
import routesContext from '../../../../context/routes/routesContext'

const ChecksToPrint = () => {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)
	const { changePage } = useContext(routesContext)

	useEffect(() => {
		changePage('Cheques Por Imprimir')
	}, [])

	return <CheckCreate />
}

export default ChecksToPrint

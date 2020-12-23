// React and Router Stuff
import React, { useState, useContext, useEffect } from 'react'
// Other Components
import ChecksCreate from './ChecksToPrintCreate'
// Context
import routesContext from '../../../../context/routes/routesContext'

const ChecksToPrint = () => {
	const [showCreateFormButton, setShowCreateFormButton] = useState(false)
	const { changePage } = useContext(routesContext)
	const [showPopup, setShowPopup] = useState(false)

	const togglePopup = () => {
		setShowPopup(!showPopup)
		console.log('activated')
	}

	useEffect(() => {
		changePage('Cheques Por Imprimir')
	}, [])

	return <ChecksCreate showPopup={showPopup} togglePopup={togglePopup} />
}

export default ChecksToPrint

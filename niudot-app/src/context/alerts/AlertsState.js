import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import alertsContext from './alertsContext'

const AlertsState = (props) => {
	const [alerts, setAlerts] = useState([])

	const addAlert = (response) => {
		console.log(typeof response, response)
	}

	return (
		<alertsContext.Provider value={{ alerts, addAlert }}>
			{props.children}
		</alertsContext.Provider>
	)
}

export default AlertsState

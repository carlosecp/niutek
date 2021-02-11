import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import alertsContext from './alertsContext'

const AlertsState = (props) => {
	const [alerts, setAlerts] = useState([])

	const addAlert = (response) => {
		console.log(response)
		const id = uuidv4()
		const newAlert = { id, msg: response.data.message, status: response.status }

		setAlerts([...alerts, newAlert])
	}

	return (
		<alertsContext.Provider value={{ alerts, addAlert }}>
			{props.children}
		</alertsContext.Provider>
	)
}

export default AlertsState

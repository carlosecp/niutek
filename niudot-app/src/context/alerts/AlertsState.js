import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import alertsContext from './alertsContext'

const AlertsState = (props) => {
	const [alerts, setAlerts] = useState([])

	const addAlert = ({ msg }) => {
		const id = uuidv4()
		setAlerts([...alerts, { id, msg }])
		setTimeout(() => {
			setAlerts(alerts.filter((alert) => alert.id !== id))
		}, 3000)
	}

	return (
		<alertsContext.Provider value={{ alerts, addAlert }}>
			{props.children}
		</alertsContext.Provider>
	)
}

export default AlertsState

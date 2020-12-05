import React, { useState } from 'react'
import alertsContext from './alertsContext'
import { v4 as uuidv4 } from 'uuid'

function AlertsState(props) {
	const [alerts, setAlerts] = useState([])

	function addAlert(msg) {
		const alertId = uuidv4()
		setAlerts([...alerts, { id: alertId, msg }])
		//setTimeout(() => {
		//setAlerts(alerts.filter((alert) => alert.id !== alertId))
		//}, 3000)
	}

	return (
		<alertsContext.Provider value={{ alerts, addAlert }}>
			{props.children}
		</alertsContext.Provider>
	)
}

export default AlertsState

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import alertsContext from './alertsContext'

const AlertsState = (props) => {
	const [alerts, setAlerts] = useState([])

	const addAlert = (res, resType = 'success') => {
		const id = uuidv4()

		let message = ''
		let type = ''

		if (resType === 'error') {
			message = res.message
			type = 'error'
		} else if ('success' in res) {
			message = res.success
			type = 'success'
		} else if ('error' in res) {
			message = res.error
			type = 'error'
		}

		const alert = { id, message, type }
		setAlerts([...alerts, alert])

		setTimeout(() => {
			setAlerts(alerts.filter((alert) => alert.id !== id))
		}, 5000)
	}

	return (
		<alertsContext.Provider value={{ alerts, addAlert }}>
			{props.children}
		</alertsContext.Provider>
	)
}

export default AlertsState

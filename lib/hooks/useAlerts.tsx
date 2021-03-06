import type { Alert } from '../interfaces'
import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

const useAlerts = () => {
	const [alerts, setAlerts] = React.useState<Alert[]>([])

	const add = (msg: string, type: 'success' | 'warning') => {
		const id = uuidv4()
		const newAlert = {
			id,
			message: msg,
			type
		}
		setAlerts([...alerts, newAlert])
	}

	const remove = (id: string) =>
		setAlerts(alerts.filter((alert) => alert.id !== id))

	const state = { alerts, add, remove }

	React.useDebugValue({ alerts })

	return state
}

export default useAlerts

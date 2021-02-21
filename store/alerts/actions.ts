import type { Alert, AlertsActionsTypes } from './types'
import { ADD_ALERT, REMOVE_ALERT } from './types'

export const addAlert = (alert: Alert): AlertsActionsTypes => ({
	type: ADD_ALERT,
	payload: alert
})

export const removeAlert = (id: string): AlertsActionsTypes => ({
	type: REMOVE_ALERT,
	payload: { id }
})

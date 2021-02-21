import type { AlertsState, AlertsActionsTypes } from './types'
import { ADD_ALERT, REMOVE_ALERT } from './types'

const initialState: AlertsState = {
	alerts: []
}

export const alertsReducer = (
	state = initialState,
	action: AlertsActionsTypes
): AlertsState => {
	switch (action.type) {
		case ADD_ALERT:
			return {
				alerts: [...state.alerts, action.payload]
			}
		case REMOVE_ALERT:
			return {
				alerts: state.alerts.filter((alert) => alert.id !== action.payload.id)
			}
		default:
			return state
	}
}

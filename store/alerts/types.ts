export const ADD_ALERT = 'ADD_ALERT'
export const REMOVE_ALERT = 'REMOVE_ALERT'

// State
export interface Alert {
	id: string
	message: string
	type: 'success' | 'warning'
}

export interface AlertsState {
	alerts: Alert[]
}

// Actions
interface AddAlert {
	type: typeof ADD_ALERT
	payload: Alert
}

interface RemoveAlert {
	type: typeof REMOVE_ALERT
	payload: {
		id: string
	}
}

export type AlertsActionsTypes = AddAlert | RemoveAlert

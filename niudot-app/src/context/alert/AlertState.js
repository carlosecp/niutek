import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import alertContext from './alertContext'
import alertReducer from './alertReducer'
import { SET_ALERT, REMOVE_ALERT } from '../types'

function AlertState(props) {
	const initialState = {}

	const [state, dispatch] = useReducer(alertReducer, initialState)

	function setAlert(msg) {
		const alertId = uuidv4()
		dispatch({ type: SET_ALERT, payload: { msg, id: alertId } })
	}

	function removeAlert(id) {
		dispatch({ type: REMOVE_ALERT, payload: id })
	}

	return (
		<alertContext.Provider
			value={{
				alerts: state,
				setAlert
			}}
		>
			{props.children}
		</alertContext.Provider>
	)
}

export default AlertState

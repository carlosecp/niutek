import React, { useReducer } from 'react'
import { LOGGED_IN } from '../types'
import authContext from './authContext'
import authReducer from './authReducer'

function AuthState(props) {
	const initialState = {
		token: ''
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	function logUser(token) {
		dispatch({ type: LOGGED_IN, payload: token })
	}

	return (
		<authContext.Provider value={{ token: state.token, logUser }}>
			{props.children}
		</authContext.Provider>
	)
}

export default AuthState

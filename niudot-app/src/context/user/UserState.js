import React, { useReducer } from 'react'
import { LOGGED_IN } from '../types'
import userContext from './userContext'
import userReducer from './userReducer'

function UserState(props) {
	const initialState = {
		token: ''
	}

	const [state, dispatch] = useReducer(userReducer, initialState)

	function logUser(token) {
		dispatch({ type: LOGGED_IN, payload: token })
	}

	return (
		<userContext.Provider value={{ token: state.token, logUser }}>
			{props.children}
		</userContext.Provider>
	)
}

export default UserState

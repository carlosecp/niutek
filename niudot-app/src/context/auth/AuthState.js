import React, { useReducer } from 'react'
import * as types from '../types'
import authContext from './authContext'
import authReducer from './authReducer'

function AuthState(props) {
	const initialState = {
		user: null,
		token: '',
		isAuthenticated: false,
		loading: true,
		error: null,
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	async function loadUser() {}

	async function register() {}

	async function loginUser() {}

	async function logout() {}

	function clearErrors() {}

	return (
		<authContext.Provider
			value={{
				...state,
				loadUser,
				register,
				loginUser,
				logout,
				clearErrors,
			}}
		>
			{props.children}
		</authContext.Provider>
	)
}

export default AuthState

import React, { useReducer } from 'react'

import axios from 'axios'
import * as types from '../types'

import authContext from './authContext'
import authReducer from './authReducer'
// Utils
import setAuthToken from '../../utils/setAuthToken'
import requestConfig from '../../utils/requestConfig'

const AuthState = (props) => {
	const initialState = {
		user: true,
		token: localStorage.getItem('token'),
		isAuthenticated: true,
		loading: true,
		error: null,
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	// &Load User
	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token)
		}

		try {
			const user = {
				username: 'CarlosECP01',
			}

			if (localStorage.token) {
				dispatch({ type: types.USER_LOADED, payload: user })
			} else {
				throw Error('No tenemos token, no estamos logueados')
			}
		} catch (err) {
			dispatch({ type: types.AUTH_ERROR, payload: err })
		}
	}

	// &Register
	const registerUser = async (formData) => {
		try {
			const res = await axios.post(
				'https://backend-dot-nicascriptproject.uc.r.appspot.com/register',
				formData,
				requestConfig
			)
			loadUser()
			dispatch({ type: types.REGISTER_SUCCESS, payload: res.data })
		} catch (err) {
			dispatch({ type: types.REGISTER_FAIL, payload: err })
		}
	}

	// &Login
	const loginUser = async (formData) => {
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_URL}/auth`,
				formData,
				requestConfig
			)
			loadUser()
			dispatch({ type: types.LOGIN_SUCCESS, payload: res.data })
		} catch (err) {
			dispatch({ type: types.LOGIN_FAIL, payload: err })
			return 0
		}
	}

	// &Logout
	const logout = () => dispatch({ type: types.LOGOUT })

	// &Clear Errors
	const clearErrors = () => {}

	return (
		<authContext.Provider
			value={{
				...state,
				loadUser,
				registerUser,
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

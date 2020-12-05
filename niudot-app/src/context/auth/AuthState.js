import React, { useReducer } from 'react'
import axios from 'axios'
import * as types from '../types'
import authContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'

function AuthState(props) {
	const initialState = {
		user: null,
		token: localStorage.getItem('token'),
		isAuthenticated: true,
		loading: true,
		error: null
	}

	const [state, dispatch] = useReducer(authReducer, initialState)

	// &Load User
	async function loadUser() {
		if (localStorage.token) {
			setAuthToken(localStorage.token)
		}

		try {
			// const res = await axios.post('/auth')

			const user = {
				username: 'CarlosECP01',
				favoriteLanguage: 'Java',
				secondaFavoriteLanguage: 'C#'
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
	async function registerUser(formData) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true'
			}
		}

		try {
			const res = await axios.post(
				'https://nicascriptproject.uc.r.appspot.com/auth',
				formData,
				config
			)

			dispatch({ type: types.REGISTER_SUCCESS, payload: res.data })

			loadUser()
		} catch (err) {
			dispatch({ type: types.REGISTER_FAIL, payload: err })
		}
	}

	// &Login
	async function loginUser(formData) {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true'
			}
		}

		try {
			const res = await axios.post('/auth', formData, config)

			dispatch({ type: types.LOGIN_SUCCESS, payload: res.data })

			loadUser()
		} catch (err) {
			dispatch({ type: types.LOGIN_FAIL, payload: err })
		}
	}

	// &Logout
	const logout = () => dispatch({ type: types.LOGOUT })

	// &Clear Errors
	function clearErrors() {}

	return (
		<authContext.Provider
			value={{
				...state,
				loadUser,
				registerUser,
				loginUser,
				logout,
				clearErrors
			}}
		>
			{props.children}
		</authContext.Provider>
	)
}

export default AuthState

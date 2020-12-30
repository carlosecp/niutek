import React, { useReducer } from 'react'
import axios from 'axios'
import * as types from '../types'
import authContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'

const AuthState = (props) => {
	const initialState = {
		user: false,
		token: localStorage.getItem('token'),
		isAuthenticated: false,
		loading: true,
		error: null
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
	const registerUser = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true'
			}
		}

		try {
			const res = await axios.post(
				'https://backend-dot-nicascriptproject.uc.r.appspot.com/register',
				formData,
				config
			)
			loadUser()
			dispatch({ type: types.REGISTER_SUCCESS, payload: res.data })
		} catch (err) {
			dispatch({ type: types.REGISTER_FAIL, payload: err })
		}
	}

	// &Login
	const loginUser = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true'
			}
		}

		try {
			const res = await axios.post(
				'https://backend-dot-nicascriptproject.uc.r.appspot.com/auth',
				formData,
				config
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
				clearErrors
			}}
		>
			{props.children}
		</authContext.Provider>
	)
}

export default AuthState

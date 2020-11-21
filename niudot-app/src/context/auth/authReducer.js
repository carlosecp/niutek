import * as types from '../types'

function authReducer(state, action) {
  switch (action.type) {
    case types.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      }
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      // Aca pues agrego el token al LS
      localStorage.setItem('token', action.payload.access_token)
      return {
        ...state,
        token: action.payload.access_token,
        isAuthenticated: true,
        loading: false
			}
		case types.LOGOUT:
    case types.AUTH_ERROR:
    case types.LOGIN_FAIL:
    case types.REGISTER_FAIL:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        // El mensaje de error que me manda el backend
        error: action.payload
      }
    default:
      return { ...state }
  }
}

export default authReducer

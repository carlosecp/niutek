import { LOGGED_IN } from '../types'

function authReducer(state, action) {
	switch (action.type) {
		case LOGGED_IN:
			return { ...state, token: action.payload }
		default:
			return state
	}
}

export default  authReducer
import { LOGGED_IN } from '../types'

export default function userReducer(state, action) {
	switch (action.type) {
		case LOGGED_IN:
			return { ...state, token: action.payload }
		default:
			return state
	}
}

import { SET_ALERT, REMOVE_ALERT } from '../types'

function alertReducer(state, action) {
	switch (action.type) {
		case SET_ALERT:
			console.log('Action Payload: ', action.payload)
			return 
			case REMOVE_ALERT:
			return
		default:
			return state
	}
}

export default alertReducer

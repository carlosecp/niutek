import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './auth/authReducer'

const rootReducer = combineReducers({
	auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>

const initialState = {}

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
)

export default store

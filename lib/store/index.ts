import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './auth/reducer'

const rootReducer = combineReducers({
	auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>

const initialState = {}

const middleware = [thunk]

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
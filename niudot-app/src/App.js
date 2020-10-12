import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/layout/Home'
import Login from './components/login/Login'
import AuthState from './context/auth/AuthState'

function App() {
	return (
		<AuthState>
			<Router>
				<Switch>
					<Route exact path='/' component={Login} />
					<Route component={Home} />
				</Switch>
			</Router>
		</AuthState>
	)
}

export default App

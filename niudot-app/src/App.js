// React and Router Stuff
import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
// Context
import RoutesState from './context/routes/RoutesState'
import AuthState from './context/auth/AuthState'
import themeContext from './context/theme/themeContext'
// Routes
import Home from './components/layout/Home'
import Login from './components/routing/Login'
import Register from './components/routing/Register'
import About from './components/pages/about'
// Others
import setAuthToken from './utils/setAuthToken'
import { PageNotFound } from './components/routing/NotFound'

function App() {
	const { theme } = useContext(themeContext)

	useEffect(() => {
		if (localStorage.token) {
			setAuthToken(localStorage.token)
		}
	}, [])

	return (
		<div className={`${theme && 'dark'}`}>
			<AuthState>
				<RoutesState>
					<Router>
						<Switch>
							<Route exact path='/' component={Login} />
							<Route exact path='/register' component={Register} />
							<Route exact path='/about' component={About} />
							<PrivateRoute path='/app' component={Home} />
							<Route path='*' component={PageNotFound} />
						</Switch>
					</Router>
				</RoutesState>
			</AuthState>
		</div>
	)
}

export default App

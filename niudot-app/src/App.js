import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import AuthState from './context/auth/AuthState'
import Home from './components/layout/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import setAuthToken from './utils/setAuthToken'
import themeContext from './context/theme/themeContext'
import SectionsProvider from './context/sections/SectionsContext'
import AlertsState from './context/alerts/alerts/AlertsState'
import RoutesState from './context/routes/RoutesState'
import { PageNotFound } from './components/routing/NotFound'

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

function App() {
	const { theme } = useContext(themeContext)

	return (
		<div className={`${theme && 'dark'}`}>
			<AuthState>
				<RoutesState>
					<AlertsState>
						<SectionsProvider>
							<Router>
								<Switch>
									<Route exact path='/' component={Login} />
									<Route exact path='/register' component={Register} />
									<PrivateRoute path='/app' component={Home} />
									<Route path='*' component={PageNotFound} />
								</Switch>
							</Router>
						</SectionsProvider>
					</AlertsState>
				</RoutesState>
			</AuthState>
		</div>
	)
}

export default App

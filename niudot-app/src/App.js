import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/routing/PrivateRoute'
import RoutesState from './context/routes/RoutesState'
import AuthState from './context/auth/AuthState'
import themeContext from './context/theme/themeContext'
import Home from './components/layout/Home'
import Login from './components/routing/Login'
import About from './components/pages/about'
import setAuthToken from './utils/setAuthToken'
import { PageNotFound } from './components/routing/NotFound'

const App = () => {
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
							<Route exact path='/about' component={About} />
							<PrivateRoute
								path='/app'
								component={Home}
								userType='client'
							/>
							<Route path='*' component={PageNotFound} />
						</Switch>
					</Router>
				</RoutesState>
			</AuthState>
		</div>
	)
}

export default App

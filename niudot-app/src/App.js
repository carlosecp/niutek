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

// * Comentarios para Juan
{
	/* Okay Juan, te voy a guiar a traves de este laberinto, porque ya casi que parece Java esto (sin el script).
	Primero tenes que irte al archivo PersonaNatural...
	*/
}

if (localStorage.token) {
	setAuthToken(localStorage.token)
}

function App() {
	const { theme } = useContext(themeContext)

	return (
		<div className={`${theme && 'dark'}`}>
			<SectionsProvider>
				<AuthState>
					<Router>
						<Switch>
							<Route exact path='/login' component={Login} />
							<Route exact path='/register' component={Register} />
							<PrivateRoute path='/' component={Home} />
						</Switch>
					</Router>
				</AuthState>
			</SectionsProvider>
		</div>
	)
}

export default App

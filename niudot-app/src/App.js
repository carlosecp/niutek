import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Login from './components/login/Login'
import Page from './components/pages/Page'
import AlertState from './context/alert/AlertState'
import AuthState from './context/auth/AuthState'

function App() {
	return (
		<AuthState>
			<AlertState>
				<Router>
					<Switch>
						<Route exact path='/' component={Login} />
						<Route
							render={(props) => (
								<>
									<Sidebar />
									<Page />
								</>
							)}
						/>
					</Switch>
				</Router>
			</AlertState>
		</AuthState>
	)
}

export default App

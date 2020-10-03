import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './components/layout/sidebar/Sidebar'
import Login from './components/login/Login'
import Page from './components/pages/Page'
import SidebarState from './context/sidebar/SidebarState'

function App() {
	return (
		<SidebarState>
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
		</SidebarState>
	)
}

export default App

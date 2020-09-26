import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Topbar from '../layout/Topbar'
import Inicio from './inicio/Inicio'
import PersonaJuridica from './clientes/PersonaJuridica'
import PersonaNatural from './clientes/PersonaNatural'

function Page() {
	return (
		<div className='page'>
			<Topbar />
			<div className='page-container'>
				<Switch>
					<Route exact path='/inicio' component={Inicio} />

					<Route
						exact
						path='/clientes/persona-natural'
						component={PersonaNatural}
					/>
					<Route
						exact
						path='/clientes/persona-juridica'
						component={PersonaJuridica}
					/>
				</Switch>
			</div>
		</div>
	)
}

export default Page

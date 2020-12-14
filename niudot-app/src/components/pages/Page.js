import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Topbar from '../layout/Topbar'
import Dashboard from './dashboard/Dashboard'
import PersonaJuridica from './clientes/personajuridica/PersonaJuridica'
import PersonaNatural from './clientes/personanatural'
import Products from './products/index'
import Check from './cheques'

function Page(props) {
	return (
		<div className='pl-64 sm:p-0 w-full'>
			<Topbar {...props} />
			<div className='px-4 pt-20 bg-white-gray relative min-h-full'>
				<Switch>
					<Route exact path='/inicio' component={Dashboard} />
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
					<Route exact path='/productos/productos' component={Products} />
					<Route exact path='/cheques/cheques' component={Check} />
				</Switch>
			</div>
		</div>
	)
}

export default Page

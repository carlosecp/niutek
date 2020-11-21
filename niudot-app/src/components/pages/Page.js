import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Topbar from '../layout/Topbar'
import Inicio from './inicio/Inicio'
import PersonaJuridica from './clientes/personajuridica/PersonaJuridica'
import PersonaNatural from './clientes/personanatural/PersonaNatural'

function Page(props) {
	return (
		<div className='page'>
			<Topbar {...props} />
			<div className='page-container'>
				<Switch>
					<Route exact path='/' component={Inicio} />

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

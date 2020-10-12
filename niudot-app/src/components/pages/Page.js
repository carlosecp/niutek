import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Topbar from '../layout/Topbar'
import Inicio from './inicio/Inicio'
import PersonaJuridica from './clientes/personajuridica/PersonaJuridica'
import PersonaNatural from './clientes/personanatural/PersonaNatural'

function Page({ toggled, setToggled }) {
	return (
		<div className='page'>
			<Topbar toggled={toggled} setToggled={setToggled} />
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

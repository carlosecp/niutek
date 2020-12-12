import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import Topbar from '../layout/Topbar'
import Inicio from './inicio/Inicio'
import PersonaJuridica from './clientes/personajuridica/PersonaJuridica'
import PersonaNatural from './clientes/personanatural'
import Products from './products/index'

function Page(props) {
	return (
		<div className='pl-64 sm:p-0 w-full'>
			<Topbar {...props} />
			<div className='px-4 pt-20 bg-white-gray relative'>
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
					<Route
						exact
						path='/productos/productos-1'
						component={Products}
					/>
				</Switch>
			</div>
		</div>
	)
}

export default Page

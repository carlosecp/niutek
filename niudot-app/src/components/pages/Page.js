import React from 'react'
import {Switch, Route} from 'react-router-dom'
import CrearPersonaNatural from './persona-natural/CrearPersonaNatural'
import PersonaNatural from './persona-natural/PersonaNatural'

function Page() {
	return (
		<div class='page'>
			<Switch>
				<Route exact path='/crear-persona-natural' component={CrearPersonaNatural} />
				<Route exact path='/persona-natural' component={PersonaNatural} />
			</Switch>
		</div>
	)
}

export default Page

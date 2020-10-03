import React from 'react'
import RetractileForm from '../RetractileForm'
import Comerciales from './Comerciales'
import Bancarias from './Bancarias'
import Personales from './Personales'

function Referencias() {
	return (
		<RetractileForm formTitle='Referencias'>
			<Comerciales />
			<Bancarias />
			<Personales title='Personales 1'/>
			<Personales title='Personales 2'/>
		</RetractileForm>
	)
}

export default Referencias

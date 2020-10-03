import React from 'react'
import RetractileForm from '../../../utils/RetractileForm'
import Accionista from './Accionista'

function AccionistasMayoritarios() {
	return (
		<RetractileForm formTitle='Accionistas Mayoritarios'>
			<Accionista />
			<Accionista />
			<Accionista />
		</RetractileForm>
	)
}

export default AccionistasMayoritarios

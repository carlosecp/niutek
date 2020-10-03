import React from 'react'
import RetractileForm from '../../../utils/RetractileForm'
import Proveedor from './Proveedor'

function PrincipalesProveedores() {
	return (
		<RetractileForm formTitle='Principales Proveedores'>
			<Proveedor />
			<Proveedor />
			<Proveedor />
		</RetractileForm>
	)
}

export default PrincipalesProveedores

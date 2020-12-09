import React from 'react'
import { Formik, Form } from 'formik'

import { FaChevronDown } from 'react-icons/fa'

import DatosEconomicos from './DatosEconomicos'
import PrincipalesProveedores from './principalesproveedores/PrincipalesProveedores'
import Referencias from '../../utils/referencias/Referencias'
import AccionistasMayoritarios from './accionistasmayoritarios/AccionistasMayoritarios'
import OrigenFondos from './OrigenFondos'
import NuevoCliente from './NewClient'

function PersonaJuridicaCreate() {
	return (
		<Formik>
			<Form className='form'>
				<NuevoCliente />
				<DatosEconomicos />
				<PrincipalesProveedores />
				<Referencias />
				<AccionistasMayoritarios />
				<OrigenFondos />
			</Form>
		</Formik>
	)
}

export default PersonaJuridicaCreate

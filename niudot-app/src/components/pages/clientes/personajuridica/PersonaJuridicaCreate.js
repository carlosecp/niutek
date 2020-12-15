import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import DatosEconomicos from './DatosEconomicos'
import PrincipalesProveedores from './PrincipalesProveedores'
import Referencias from '../../utils/referencias/Referencias'
import AccionistasMayoritarios from './AccionistasMayoritarios'
import OrigenFondos from './OrigenFondos'
import NuevoCliente from './NewClient'
import SubmitBtn from '../../utils/SubmitBtn'

import {
	createValues,
	createValuesSchema,
	principalesProveedores,
	origenFondos,
	refComercialesValues,
	refBancariasValues,
	refPersonales1Values,
	refPersonales2Values,
	accionistasMayoritarios
} from './formInitialValues'

export const initialValues = {
	...createValues,
	...principalesProveedores,
	...origenFondos,
	...refComercialesValues,
	...refBancariasValues,
	...refPersonales1Values,
	...refPersonales2Values,
	...accionistasMayoritarios
}

const validationSchema = Yup.object({
	...createValuesSchema
})

function PersonaJuridicaCreate() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className='form'>
				<NuevoCliente />
				<DatosEconomicos />
				<PrincipalesProveedores />
				<Referencias />
				<AccionistasMayoritarios />
				<OrigenFondos />
				<SubmitBtn />
			</Form>
		</Formik>
	)
}

export default PersonaJuridicaCreate

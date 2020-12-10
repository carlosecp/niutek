import React from 'react'
import { Formik, Form } from 'formik'
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
	datosValues,
	origenFondos,
	refComercialesValues,
	refBancariasValues,
	refPersonales1Values,
	refPersonales2Values
} from './formInitialValues'
import RowElement from '../../utils/Tablas/Column/RowElement'

export const initialValues = {
	...createValues
}

function PersonaJuridicaCreate() {
	return (
		<Formik
		initialValues={initialValues}
		validationSchema={createValuesSchema}
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

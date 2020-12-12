import React from 'react'
import { Formik, Form } from 'formik'
import DatosProfesionalesEconomicos from './DatosProfesionalesEconomicos'
import Referencias from '../../utils/referencias/Referencias'
import NewClient from './NewClient'
import SubmitBtn from '../../utils/SubmitBtn'
import OrigenFondos from './OrigenFondos'

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
import Table from '../../utils/Table'


export const initialValues = {
	...createValues,
	...datosValues,
	...origenFondos,
	...refComercialesValues,
	...refBancariasValues,
	...refPersonales1Values,
	...refPersonales2Values
}

const validationSchema = {
	...createValuesSchema
}

function PersonaNaturalCreate() {
	return (<>
	
		<Formik
			initialValues={initialValues}
			validationSchema={createValuesSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form>
			<Table />
				<h2 className='text-black-white text-xl font-bold'>
					Crear Un Nuevo Cliente
				</h2>
				<p className='text-gray-gray'>Crear un nuevo cliente.</p>
				<NewClient id='nuevo-cliente' />
				<DatosProfesionalesEconomicos id='datos-profesionales-economicos' />
				<OrigenFondos />
				<Referencias id='referencias' />
				<SubmitBtn />
			</Form>
		</Formik>
		</>
	)
}

export default PersonaNaturalCreate

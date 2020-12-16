import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
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

export const initialValues = {
	...createValues,
	...datosValues,
	...origenFondos,
	...refComercialesValues,
	...refBancariasValues,
	...refPersonales1Values,
	...refPersonales2Values
}

const validationSchema = Yup.object({
	...createValuesSchema
})

function PersonaNaturalCreate() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form>
				<div className='section'>
					<h2 className='text-black-white text-xl font-bold'>
						Crear Un Nuevo Cliente{' '}
					</h2>
					<p className='text-gray-gray'>Crear un nuevo cliente.</p>
					<NewClient />
					<DatosProfesionalesEconomicos />
					<OrigenFondos />
					<Referencias />
					<SubmitBtn />
				</div>
			</Form>
		</Formik>
	)
}

export default PersonaNaturalCreate

// React and Router Stuff
import React from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import ProfessionalData from './ProfessionalData'
import Referencias from '../../utils/referencias/Referencias'
import NewClient from './NewClient'
import SubmitBtn from '../../utils/SubmitBtn'
import OriginFunds from './OriginFunds'
// Data
import {
	createValues,
	createValuesSchema,
	datosValues,
	origenFondos,
	refComercialesValues,
	refBancariasValues,
	refPersonales1Values,
	refPersonales2Values
} from './initialValues'

const initialValues = {
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

const NaturalPersonCreate = () => {
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
					<ProfessionalData />
					<OriginFunds />
					<Referencias />
					<SubmitBtn />
				</div>
			</Form>
		</Formik>
	)
}

export default NaturalPersonCreate

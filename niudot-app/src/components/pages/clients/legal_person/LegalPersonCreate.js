// React and Router Stuff
import React from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import EconomicData from './EconomicData'
import MainSupliers from './MainSuppliers'
import Referencias from '../../utils/references'
import ControllingShareholders from './ControllingShareholders'
import OriginFunds from './OriginFunds'
import NewClient from './NewClient'
import SubmitBtn from '../../utils/SubmitBtn'
// Data
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
} from './initialValues'

const initialValues = {
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

const LegalPersonCreate = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className='section'>
				<h2 className='text-black-white text-xl font-bold'>
					Crear Un Nuevo Cliente{' '}
				</h2>
				<p className='text-gray-gray'>Crear un nuevo cliente.</p>
				<NewClient />
				<EconomicData />
				<MainSupliers />
				<Referencias />
				<ControllingShareholders />
				<OriginFunds />
				<SubmitBtn />
			</Form>
		</Formik>
	)
}

export default LegalPersonCreate

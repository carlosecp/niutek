// React and Router Stuff
import React, { useState, useEffect } from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import ProfessionalData from './ProfessionalData'
import Referencias from '../../utils/references'
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

const NaturalPersonCreate = ({ type }) => {
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
					{type === 'edit' ? (
						<>
							<h2 className='text-black-white text-xl font-bold'>
								Editar Cliente Existente
							</h2>
							<p className='text-gray-gray'>Editando Cliente ID #123</p>
						</>
					) : (
						<>
							<h2 className='text-black-white text-xl font-bold'>
								Crear Nuevo Cliente
							</h2>
							<p className='text-gray-gray'>Registrar un nuevo cliente.</p>
						</>
					)}
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

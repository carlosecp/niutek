// React and Router Stuff
import React, { useState, useEffect } from 'react'
// Extra libraries
import axios from 'axios'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import ProfessionalData from './ProfessionalData'
import References from '../../utils/references'
import NewClient from './NewClient'
import SubmitBtn from '../../utils/SubmitBtn'
import OriginFunds from './OriginFunds'
// Data
import { createValues } from './initialValues'

const initialValues = {
	...createValues
}

const handleSubmit = async (formData) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		}
	}

	const res = await axios.post(
		'https://backend-dot-nicascriptproject.uc.r.appspot.com/update/cliente_natural',
		formData,
		config
	)

	console.log(res)
}

const NaturalPersonCreate = ({ type }) => {
	return (
		<Formik
			initialValues={initialValues}
			//validationSchema={validationSchema}
			onSubmit={(values) => {
				handleSubmit(values)
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
				</div>
				<div className='mt-4 section'>
					<NewClient />
					<ProfessionalData />
					<OriginFunds />
					<References />
					<SubmitBtn />
				</div>
			</Form>
		</Formik>
	)
}

export default NaturalPersonCreate

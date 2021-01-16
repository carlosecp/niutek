// React and Router Stuff
import React, { useState } from 'react'
// Extra libraries
import axios from 'axios'
import { Formik, Form } from 'formik'
// Other Components
import ProfessionalData from './ProfessionalData'
import References from '../../utils/references'
import NewClient from './NewClient'
import SubmitBtn from '../../utils/SubmitBtn'
import OriginFunds from './OriginFunds'
// Data
import {
	persona_natural,
	datos_profesionales,
	origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	cuentas_depositos,
	referencias_personales,
} from './initialValues'

const initialValues = {
	...persona_natural,
	...datos_profesionales,
	...origen_fondos,
	...referencias_comerciales,
	...referencias_bancarias,
	...cuentas_depositos,
	...referencias_personales,
}

const NaturalPersonCreate = ({ type, user }) => {
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (formData) => {
		setLoading(true)
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true',
			},
		}

		const res = await axios.post(
			'https://backend-dot-nicascriptproject.uc.r.appspot.com/update/cliente_natural',
			formData,
			config
		)

		console.log(res)
		setLoading(false)
	}

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
							<p className='text-gray-gray'>
								<b>Editando Cliente: </b>
								{user.id} - {`${user.name} ${user.last_name}`}
							</p>
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
					<SubmitBtn loading={loading} />
				</div>
			</Form>
		</Formik>
	)
}

export default NaturalPersonCreate

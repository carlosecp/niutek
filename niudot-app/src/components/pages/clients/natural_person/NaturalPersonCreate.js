import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import NewClient from './NewClient'
import ProfessionalData from './ProfessionalData'
import OriginFunds from './OriginFunds'
import References from './references'
import SubmitBtn from '../../utils/SubmitBtn'
import {
	persona_natural,
	datos_profesionales,
	origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
	validationSchema,
} from './initialValues'
import useOptions from '../../../../hooks/useOptions'
import parseValues from './parseValues'
import authContext from '../../../../context/auth/authContext'

const initialValues = {
	...persona_natural,
	...datos_profesionales,
	...origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
}

const NaturalPersonCreate = ({
	clientData,
	writeForm,
	savingClient,
	goBack,
}) => {
	const optionsReqConfig = {
		dep: { codigo: '0' },
		table: { p_tipo: '*' },
	}

	const optionsFormat = [
		'dep',
		['p_tipo_doc', 'p_moneda', 'p_sexo', 'p_cod_nac', 'pct_cod_banco'],
	]

	const { options, loading } = useOptions(optionsReqConfig, optionsFormat)

	const { user } = useContext(authContext)

	return (
		<Formik
			initialValues={clientData || initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				const parsedValues = parseValues(values)
				const tempValues = {
					...user.params,
					...parsedValues,
				}
				const writeType = clientData ? 'modify' : 'create'
				writeForm(writeType, tempValues)
			}}
		>
			<Form>
				<div className='mx-auto max-w-2xl pb-4'>
					<button
						type='button'
						className='btn bg-blue-blue'
						onClick={() => goBack()}
					>
						Regresar
					</button>
				</div>
				<div className='section'>
					{clientData ? (
						<>
							<h2 className='text-black-white text-xl font-bold'>
								Editar Cliente Existente
							</h2>
							<p className='text-gray-gray'>
								<b>Editando Cliente:</b>{' '}
								{clientData.p_cod_cliente} -{' '}
								{clientData.p_nombres} {clientData.p_apellidos}
							</p>
						</>
					) : (
						<>
							<h2 className='text-black-white text-xl font-bold'>
								Crear Nuevo Cliente
							</h2>
							<p className='text-gray-gray'>
								Registrar un nuevo cliente.
							</p>
						</>
					)}
				</div>
				<div className='mt-4 section'>
					<NewClient options={options} loading={loading} />
					<ProfessionalData />
					<OriginFunds />
					<References options={options} loading={loading} />
					<SubmitBtn loading={savingClient} />
				</div>
			</Form>
		</Formik>
	)
}

export default NaturalPersonCreate

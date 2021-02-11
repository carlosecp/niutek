import React from 'react'
import { Formik, Form } from 'formik'
import NewClient from './NewClient'
import OriginFunds from './OriginFunds'
import References from './references'
import SubmitBtn from '../../utils/SubmitBtn'
import {
	persona_juridica,
	origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	proveedores,
	accionistas,
	validationSchema,
} from './initialValues'
import useOptions from '../../../../hooks/useOptions'
import Providers from './Providers'
import Accionists from './Accionists'

const initialValues = {
	...persona_juridica,
	...origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	proveedores,
	accionistas,
}

const LegalPersonCreate = ({ clientData, writeForm, goBack, sendingForm }) => {
	const optionsReqConfig = {
		dep: { codigo: '0' },
		table: { p_tipo: '*' },
	}

	const optionsFormat = [
		'dep',
		['p_tipo_doc', 'p_moneda', 'p_sexo', 'p_cod_nac', 'pct_cod_banco'],
	]

	const { options, loading } = useOptions(optionsReqConfig, optionsFormat)

	return (
		<Formik
			initialValues={clientData || initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				const tempValues = {
					p_cod_empresa: 1,
					p_cod_sucursal: 0,
					p_clase_persona: 1,
					...values,
				}
				const writeType = clientData ? 'modify' : 'update'
				writeForm(writeType, tempValues)
			}}
		>
			<Form>
				<div className='mx-auto max-w-2xl pb-4'>
					<button
						type='button'
						className='btn bg-blue-blue'
						onClick={goBack}
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
								{clientData.p_cod_cliente}
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
					<OriginFunds />
					<References options={options} loading={loading} />
					<Providers />
					<Accionists options={options} loading={loading} />
					<SubmitBtn loading={sendingForm} />
				</div>
			</Form>
		</Formik>
	)
}

export default LegalPersonCreate

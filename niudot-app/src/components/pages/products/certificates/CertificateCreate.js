import React from 'react'
import { Formik, Form } from 'formik'
import NewCertificate from './NewCertificate'
import SubmitBtn from '../../utils/SubmitBtn'
import {
	persona_natural,
	datos_profesionales,
	origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
} from './initialValues'
import useOptions from '../../../../hooks/useOptions'

const initialValues = {
	...persona_natural,
	...datos_profesionales,
	...origen_fondos,
	referencias_comerciales,
	referencias_bancarias,
	referencias_personales,
}

const CertificateCreate = ({
	depositData,
	writeForm,
	savingClient,
	goBack,
}) => {
	const { options, loading } = useOptions(
		{
			p_moneda: [],
		},
		{
			endpoint: 'read/table',
			body: { p_tipo: '2' },
		},
		true
	)

	return (
		<Formik
			initialValues={depositData || initialValues}
			handle
			onSubmit={(values) => {
				const tempValues = {
					p_cod_empresa: 1,
					p_cod_sucursal: 0,
					p_clase_persona: 1,
					...values,
				}
				const writeType = depositData ? 'update' : 'create'
				writeForm(writeType, tempValues)
			}}
		>
			<Form>
				<div className='mx-auto max-w-2xl pb-4'>
					<button className='btn bg-blue-blue' onClick={goBack}>
						Regresar
					</button>
				</div>
				<div className='section'>
					{depositData ? (
						<>
							<h2 className='text-black-white text-xl font-bold'>
								Editar Producto Existente
							</h2>
							<p className='text-gray-gray'>
								<b>Editando Cliente:</b> {depositData.p_cod_cliente} -{' '}
								{depositData.p_nombres} {depositData.p_apellidos}
							</p>
						</>
					) : (
						<>
							<h2 className='text-black-white text-xl font-bold'>
								Crear Nuevo Producto
							</h2>
							<p className='text-gray-gray'>
								Registrar un nuevo producto depósitos a plazo fijo.
							</p>
						</>
					)}
				</div>
				<div className='mt-4 section'>
					<NewCertificate options={options} loading={loading} />
					<SubmitBtn loading={savingClient} />
				</div>
			</Form>
		</Formik>
	)
}

export default CertificateCreate

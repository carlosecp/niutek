import React from 'react'
import { Formik, Form } from 'formik'
import NewCertificate from './NewCertificate'
import SubmitBtn from '../../utils/SubmitBtn'
import { initialValues } from './initialValues'
import useOptions from '../../../../hooks/useOptions'

const CertificateCreate = ({
	certificateData,
	writeForm,
	savingClient,
	goBack,
}) => {
	const optionsReqConfig = {
		table: { p_tipo: '2' },
	}

	const optionsFormat = [['p_moneda']]

	const { options, loading } = useOptions(optionsReqConfig, optionsFormat)

	return (
		<Formik
			initialValues={certificateData || initialValues}
			handle
			onSubmit={(values) => {
				const tempValues = {
					p_cod_empresa: 1,
					p_cod_sucursal: 0,
					p_clase_persona: 1,
					pdc_cod_documento: '1         2         ',
					pdc_reg: 2,
					...values,
				}
				const writeType = certificateData ? 'update' : 'register'
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
					{certificateData ? (
						<>
							<h2 className='text-black-white text-xl font-bold'>
								Editar Producto Existente
							</h2>
							<p className='text-gray-gray'>
								<b>Editando Cliente:</b>{' '}
								{certificateData.p_cod_producto} -{' '}
								{certificateData.p_nombre}
							</p>
						</>
					) : (
						<>
							<h2 className='text-black-white text-xl font-bold'>
								Crear Nuevo Producto
							</h2>
							<p className='text-gray-gray'>
								Registrar un nuevo producto depósitos a plazo
								fijo.
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

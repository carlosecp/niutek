import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import NewCertificate from './NewCertificate'
import SubmitBtn from '../../utils/SubmitBtn'
import { initialValues, validationSchema } from './initialValues'
import useOptions from '../../../../hooks/useOptions'
import authContext from '../../../../context/auth/authContext'

const CertificateCreate = ({
	certificateData,
	writeForm,
	savingCertificate,
	goBack,
}) => {
	const optionsReqConfig = {
		table: { p_tipo: '2' },
	}

	const optionsFormat = [['p_moneda']]

	const { options, loading } = useOptions(optionsReqConfig, optionsFormat)

	const { user } = useContext(authContext)

	return (
		<Formik
			initialValues={certificateData || initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log(values)
				const tempValues = {
					...user.params,
					...values,
				}
				const writeType = certificateData ? 'modify' : 'register'
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
								<b>Editando Certificado:</b>{' '}
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
					<SubmitBtn loading={savingCertificate} />
				</div>
			</Form>
		</Formik>
	)
}

export default CertificateCreate

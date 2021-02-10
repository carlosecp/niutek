import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import NewCredit from './NewCredit'
import SubmitBtn from '../../utils/SubmitBtn'
import { credit, cargos } from './initialValues'
import useOptions from '../../../../hooks/useOptions'

const initialValues = {
	...credit,
	cargos,
}

const CreditCreate = ({ creditData, writeForm, savingClient, goBack }) => {
	const [showCreditPopup, setShowCreditPopup] = useState(false)
	const [activeCredit, setActiveCredit] = useState(null)

	const optionsReqConfig = {
		tablas_cre: { p_tipo: '*' },
	}

	const optionsFormat = [
		[
			'p_cod_tipo_credito',
			'p_cod_fuente_fondo',
			'plazo_interes',
			'frecuencia_pago',
			'tipo_cargo',
		],
	]

	const { options, loading } = useOptions(optionsReqConfig, optionsFormat)

	const toggleEditPopup = (creditId) => {
		setActiveCredit(creditId)
		setShowCreditPopup(!showCreditPopup)
	}

	return (
		<Formik
			initialValues={creditData || initialValues}
			handle
			onSubmit={(values) => {
				const tempValues = {
					p_cod_empresa: 1,
					p_cod_sucursal: 0,
					p_clase_persona: 1,
					...values,
				}
				const writeType = creditData ? 'update' : 'register'
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
					{creditData ? (
						<>
							<h2 className='text-black-white text-xl font-bold'>
								Editar Producto Existente
							</h2>
							<p className='text-gray-gray'>
								<b>Editando Cliente:</b>{' '}
								{creditData.p_cod_cliente} -{' '}
								{creditData.p_nombres} {creditData.p_apellidos}
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
					<NewCredit
						options={options}
						loading={loading}
						togglePopup={toggleEditPopup}
					/>
					<SubmitBtn loading={savingClient} />
				</div>
			</Form>
		</Formik>
	)
}

export default CreditCreate

import React, { useEffect } from 'react'
import { Formik, Form } from 'formik'
import NewProduct from './NewProduct'
import SubmitBtn from '../../utils/SubmitBtn'
import { initialValues } from './initialValues'
import useOptions from '../../../../hooks/useOptions'

const ProductCreate = ({ productData, writeForm, savingClient, goBack }) => {
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
			initialValues={productData || initialValues}
			handle
			onSubmit={(values) => {
				const tempValues = {
					p_cod_empresa: 1,
					p_cod_sucursal: 0,
					pdc_reg: 2,
					...values,
				}
				const writeType = productData ? 'modify' : 'register'
				writeForm(writeType, tempValues)
			}}
		>
			<Form>
				<div className='mx-auto max-w-2xl pb-4'>
					<button type='button' className='btn bg-blue-blue' onClick={goBack}>
						Regresar
					</button>
				</div>
				<div className='section'>
					{productData ? (
						<>
							<h2 className='text-black-white text-xl font-bold'>
								Editar Producto de Ahorro Existente
							</h2>
							<p className='text-gray-gray'>
								<b>Editando Producto:</b> {productData.p_cod_producto}
							</p>
						</>
					) : (
						<>
							<h2 className='text-black-white text-xl font-bold'>
								Crear Nuevo Producto
							</h2>
							<p className='text-gray-gray'>
								Registrar un nuevo producto cuentas de ahorro.
							</p>
						</>
					)}
				</div>
				<div className='mt-4 section'>
					<NewProduct options={options} loading={loading} />
					<SubmitBtn loading={savingClient} />
				</div>
			</Form>
		</Formik>
	)
}

export default ProductCreate

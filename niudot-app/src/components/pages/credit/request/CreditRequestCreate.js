// React and Router Stuff
import React from 'react'
// Extra libraries
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
// Other Components
import { Dropdown, Text } from '../../utils/forms'
import SubmitBtn from '../../utils/SubmitBtn'
// Data
import { createValues, createValuesSchema } from './initialValues'

const initialValues = {
	...createValues
}

const validationSchema = Yup.object({
	...createValuesSchema
})

const CreditRequestCreate = () => {
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
					<h2 className='text-black-white text-xl font-bold'>
						Solicitud de Crédito{' '}
					</h2>
					<div className='form-grid-layout'>
						<Text
							name='create_tipo_de_credito'
							size='md'
							placeholder='Tipo de Crédito'
							label='Tipo de Crédito'
						/>
						<Text
							name='create_nombre_del_producto'
							size='lg'
							placeholder='Nombre del Producto'
							label='Nombre del Producto'
						/>
						<Text
							name='create_fecha_de_solicitud'
							size='md'
							placeholder='dd/mm/yyyy'
							label='Fecha de Solicitud'
						/>
						<Text
							name='create_promotor'
							size='md'
							placeholder='Promotor'
							label='Promotor'
						/>
						<Text
							name='create_monto_solicitado'
							size='md'
							placeholder='0'
							label='Monto Solicitado'
							type='number'
							min='0'
							newLine={true}
						/>
						<Dropdown
							size='md'
							name='create_moneda'
							label='Moneda'
							placeholder='Moneda'
						>
							<option value='option_2'>Córdobas</option>
							<option value='option_3'>Dólares</option>
							<option value='option_3'>Colones</option>
						</Dropdown>

						<Text
							name='create_tasa_de_interes_mensual'
							size='md'
							placeholder='Tasa de Interés Mensual'
							label='Tasa de Interés Mensual'
							type='number'
							min='0'
							newLine={true}
						/>
						<Text
							name='create_plazo_en_meses'
							size='md'
							placeholder='Plazo en Meses'
							label='Plazo en Meses'
							type='number'
							min='1'
							newLine={true}
						/>
						<Text
							name='create_frecuencia_de_pago'
							size='md'
							placeholder='Frecuencia de Pago'
							label='Frecuencia de Pago'
							type='number'
							min='0'
							newLine={true}
						/>
						<Text
							name='create_porcentaje_aportación'
							size='md'
							placeholder='Porcentaje de Aportación'
							label='Porcentaje de Aportación'
							type='number'
							min='0'
						/>
						<Text
							name='create_documentos_requeridos'
							size='md'
							placeholder='Documentos Requeridos'
							label='Documentos Requeridos'
						/>
						<Text
							name='create_observaciones'
							size='lg'
							newLine={true}
							placeholder='Observaciones'
							isTextArea={true}
							label='Observaciones'
						/>
					</div>
					<SubmitBtn />
				</div>
			</Form>
		</Formik>
	)
}

export default CreditRequestCreate

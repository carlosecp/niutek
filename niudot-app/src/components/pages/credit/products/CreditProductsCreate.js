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

const CreditProductsCreate = () => {
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
						Productos de Crédito{' '}
					</h2>
					<div className='form-grid-layout'>
						<Text
							name='create_tipo_de_credito'
							size='md'
							placeholder='Tipo de Crédito'
							label='Tipo de Crédito'
						/>
						<Text
							name='create_fuente_de_fondos'
							size='md'
							placeholder='Fuente de Fondos'
							label='Fuente de Fondos'
							newLine={true}
						/>
						<Text
							name='create_nombre_del_producto'
							size='lg'
							placeholder='Nombre del Producto'
							label='Nombre del Producto'
						/>
						<Text
							name='create_descripcion'
							size='lg'
							newLine={true}
							placeholder='Descripción'
							label='Descripción'
							isTextArea={true}
						/>

						<Dropdown
							size='md'
							name='create_aplica_a_grupo_solidario'
							label='Aplica a Grupo Solidario'
							placeholder='Aplica a Grupo Solidario'
						>
							<option value='option_2'>Sí</option>
							<option value='option_3'>No</option>
						</Dropdown>
						<Dropdown
							size='md'
							name='create_aplica_individual'
							label='Aplica Individual'
							placeholder='Aplica Individual'
						>
							<option value='option_2'>Sí</option>
							<option value='option_3'>No</option>
						</Dropdown>

						<Dropdown
							size='md'
							name='create_moneda'
							label='Moneda'
							placeholder='Moneda'
							newLine={true}
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
							name='create_monto_minimo'
							size='md'
							placeholder='Monto Mínimo'
							label='Monto Mínimo'
							type='number'
							min='0'
							newLine={true}
						/>
						<Text
							name='create_monto_maximo'
							size='md'
							placeholder='Monto Máximo'
							label='Monto Máximo'
							type='number'
							min='0'
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
					</div>
					<SubmitBtn />
				</div>
			</Form>
		</Formik>
	)
}

export default CreditProductsCreate

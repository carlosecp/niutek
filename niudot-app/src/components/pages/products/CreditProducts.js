import React from 'react'
import {
	FormTextInput,
	FormTextArea,
	FormDropdownInput
} from '../utils/formikComponentsEndpoint'
import RetractileForm from '../utils/RetractileForm'

export default function CreditProducts() {
	return (
		<RetractileForm id='CreditProducts' formTitle='Productos de Crédito'>
			<div className='form-grid-layout'>
				<FormTextInput
					name='tipo_de_credito'
					size='md'
					placeholder='Tipo de Crédito'
					label='Tipo de Crédito'
				/>
                <FormTextInput
					name='fuente_de_fondos'
					size='md'
					placeholder='Fuente de Fondos'
                    label='Fuente de Fondos'
                    newLine={true}
				/>
				<FormTextInput
					name='nombre_del_producto_creditproducts'
					size='lg'
					placeholder='Nombre del Producto'
					label='Nombre del Producto'
				/>
				<FormTextArea
					name='descripcion_de_producto_creditproducts'
					size='lg'
					newLine={true}
					placeholder='Descripción del Producto'
					label='Descripción'
				/>
				<FormTextInput
					name='documentos_requeridos_creditproducts'
					size='md'
					placeholder='Documentos Requeridos'
					label='Documentos Requeridos'
				/>
				<FormDropdownInput
					size='sm'
					name='moneda_creditproducts'
					label='Moneda'
					newLine={true}
				>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dolar</option>
					<option value='option_4'>Colón</option>
				</FormDropdownInput>

				<FormTextInput
					name='tasa_de_interes_creditproducts'
					size='sm'
					placeholder='Tasa de Interés'
					label='Tasa de Interés'
				/>
				<FormDropdownInput size='sm' name='plazo_creditproducts' label='Plazo'>
					<option value=''>Mensual</option>
					<option value='option_2'>Anual</option>
				</FormDropdownInput>

				<FormTextInput
					name='monto_minimo_apertura_creditproducts'
					size='md'
					placeholder='Monto Mínimo Apertura'
					label='Monto Mínimo Apertura'
				/>

				<FormTextInput
					name='frecuencia_de_pago_creditproducts'
					size='md'
					placeholder='Frecuencia de Pago'
					label='Frecuencia de Pago'
				/>
                <FormTextInput
					name='monto_maximo_retiros_creditproducts'
					size='md'
					placeholder='Monto Maximo Retiros'
					label='Monto Maximo Retiros'
				/>
				
			</div>
		</RetractileForm>
	)
}

import React from 'react'
import {
	FormTextInput,
	FormTextArea,
	FormDropdownInput
} from '../utils/formikComponentsEndpoint'
import RetractileForm from '../utils/RetractileForm'

export default function SavingAccounts() {
	return (
		<RetractileForm id='SavingAccounts' formTitle='Cuentas de Ahorro'>
			<div className='form-grid-layout'>
				<FormTextInput
					name='nombre_del_producto'
					size='xl'
					placeholder='Nombre del Producto'
					label='Nombre del Producto'
				/>
				<FormTextArea
					name='descripcion_de_producto'
					size='xl'
					newLine={true}
					placeholder='Descripción del Producto'
					label='Descripción'
				/>
				<FormTextInput
					name='documentos_requeridos'
					size='md'
					placeholder='Documentos Requeridos'
					label='Documentos Requeridos'
				/>
				<FormDropdownInput
					size='sm'
					name='moneda'
					label='Moneda'
					newLine={true}
				>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dolar</option>
					<option value='option_4'>Colón</option>
				</FormDropdownInput>

				<FormTextInput
					name='tasa_de_interes'
					size='sm'
					placeholder='Tasa de Interés'
					label='Tasa de Interés'
				/>
				<FormDropdownInput size='sm' name='plazo' label='Plazo'>
					<option value=''>Mensual</option>
					<option value='option_2'>Anual</option>
				</FormDropdownInput>

				<FormTextInput
					name='monto_minimo_apertura'
					size='lg'
					placeholder='Monto Mínimo Apertura'
					label='Monto Mínimo Apertura'
				/>

				<FormTextInput
					name='monto_máximo_retiros'
					size='lg'
					placeholder='Monto Máximo Retiros'
					label='Monto Máximo Retiros'
				/>
				<FormTextInput
					name='monto_promedio_mensual'
					size='lg'
					placeholder='Monto Promedio Mensual'
					label='Monto Promedio Mensual'
					newLine={true}
				/>
				<FormTextInput
					name='monto_retiros_mensuales'
					size='lg'
					placeholder='Monto Retiros Mensuales'
					label='Monto Retiros Mensuales'
				/>
			</div>
		</RetractileForm>
	)
}

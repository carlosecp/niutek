import React from 'react'
import { FormTextInput, FormTextArea, FormDropdownInput } from '../utils/formikComponentsEndpoint'
import RetractileForm from '../utils/RetractileForm'


export default function TimeDeposits() {
	return (
		<RetractileForm id='TimeDeposits' formTitle='Depósitos a Plazo Fijo'>
			<div className='form-grid-layout'>
				<FormTextInput
					name='nombre_del_producto_timedeposits'
					size='xl'
					placeholder='Nombre del Producto'
					label='Nombre del Producto'
				/>
				<FormTextArea
					name='descripcion_de_producto_timedeposits'
					size='xl'
					newLine={true}
					placeholder='Descripción del Producto'
					label='Descripción'
				/>
				<FormTextInput
					name='documentos_requeridos_timedeposits'
					size='md'
					placeholder='Documentos Requeridos'
					label='Documentos Requeridos'
				/>
				<FormDropdownInput
					size='sm'
					name='moneda_timedeposits'
					label='Moneda'
					newLine={true}
				>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dolar</option>
					<option value='option_4'>Colón</option>
				</FormDropdownInput>

				<FormTextInput
					name='tasa_de_interes_timedeposits'
					size='sm'
					placeholder='Tasa de Interés'
					label='Tasa de Interés'
				/>
				<FormDropdownInput size='sm' name='plazo_timedeposits' label='Plazo'>
					<option value=''>Mensual</option>
					<option value='option_2'>Anual</option>
				</FormDropdownInput>

				<FormTextInput
					name='monto_minimo_apertura_timedeposits'
					size='lg'
					placeholder='Monto Mínimo Apertura'
					label='Monto Mínimo Apertura'
				/>

				<FormTextInput
					name='monto_maximo_retiros_timedeposits'
					size='lg'
					placeholder='Monto Maximo Retiros'
					label='Monto Maximo Retiros'
				/>
				<FormTextInput
					name='monto_promedio_mensual_timedeposits'
					size='lg'
					placeholder='Monto Promedio Mensual'
					label='Monto Promedio Mensual'
					newLine={true}
				/>
				<FormTextInput
					name='monto_retiros_mensuales_timedeposits'
					size='lg'
					placeholder='Monto Retiros Mensuales'
					label='Monto Retiros Mensuales'
				/>
                <FormTextInput
					name='tasa_de_interes_timedeposits1'
					size='sm'
					placeholder='Tasa de Interés'
					label='Tasa de Interés'
				/>
				<FormDropdownInput size='sm' name='plazo_timedeposits1' label='Plazo'>
					<option value=''>Mensual</option>
					<option value='option_2'>Anual</option>
				</FormDropdownInput>

				<FormTextInput
					name='monto_minimo_apertura_timedeposits1'
					size='lg'
					placeholder='Monto Mínimo Apertura'
                    label='Monto Mínimo Apertura'
                    newLine={true}
				/>

				<FormTextInput
					name='monto_maximo_retiros_timedeposits1'
					size='lg'
					placeholder='Monto Maximo Retiros'
					label='Monto Maximo Retiros'
				/>
				<FormTextInput
					name='monto_promedio_mensual_timedeposits1'
					size='lg'
					placeholder='Monto Promedio Mensual'
					label='Monto Promedio Mensual'
					newLine={true}
				/>
				<FormTextInput
					name='monto_retiros_mensuales_timedeposits1'
					size='lg'
					placeholder='Monto Retiros Mensuales_timedeposits1'
					label='Monto Retiros Mensuales'
				/>
			</div>
		</RetractileForm>
	)
}

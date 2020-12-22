// React and Router Stuff
import React from 'react'
// Other Components
import { Text, Dropdown } from '../utils/forms'
import RetractileForm from '../utils/retractile_sections'

const TimeDeposits = () => {
	return (
		<RetractileForm id='TimeDeposits' formTitle='Depósitos a Plazo Fijo'>
			<div className='form-grid-layout'>
				<Text
					name='nombre_del_producto_timedeposits'
					size='lg'
					placeholder='Nombre del Producto'
					label='Nombre del Producto'
				/>
				<Text
					name='descripcion_de_producto_timedeposits'
					size='lg'
					newLine={true}
					placeholder='Descripción del Producto'
					label='Descripción'
					isTextArea={true}
				/>
				<Text
					name='documentos_requeridos_timedeposits'
					size='md'
					placeholder='Documentos Requeridos'
					label='Documentos Requeridos'
				/>
				<Dropdown
					size='sm'
					name='moneda_timedeposits'
					label='Moneda'
					newLine={true}
				>
					<option value=''>Moneda</option>
					<option value='option_2'>Córdoba</option>
					<option value='option_3'>Dolar</option>
					<option value='option_4'>Colón</option>
				</Dropdown>

				<Text
					name='tasa_de_interes_timedeposits'
					size='sm'
					placeholder='Tasa de Interés'
					label='Tasa de Interés'
				/>
				<Dropdown size='sm' name='plazo_timedeposits' label='Plazo'>
					<option value=''>Mensual</option>
					<option value='option_2'>Anual</option>
				</Dropdown>

				<Text
					name='monto_minimo_apertura_timedeposits'
					size='md'
					placeholder='Monto Mínimo Apertura'
					label='Monto Mínimo Apertura'
				/>

				<Text
					name='monto_maximo_retiros_timedeposits'
					size='md'
					placeholder='Monto Maximo Retiros'
					label='Monto Maximo Retiros'
				/>
				<Text
					name='monto_promedio_mensual_timedeposits'
					size='md'
					placeholder='Monto Promedio Mensual'
					label='Monto Promedio Mensual'
					newLine={true}
				/>
				<Text
					name='monto_retiros_mensuales_timedeposits'
					size='md'
					placeholder='Monto Retiros Mensuales'
					label='Monto Retiros Mensuales'
				/>
				<Text
					name='tasa_de_interes_timedeposits1'
					size='sm'
					placeholder='Tasa de Interés'
					label='Tasa de Interés'
				/>
				<Dropdown size='sm' name='plazo_timedeposits1' label='Plazo'>
					<option value=''>Mensual</option>
					<option value='option_2'>Anual</option>
				</Dropdown>

				<Text
					name='monto_minimo_apertura_timedeposits1'
					size='md'
					placeholder='Monto Mínimo Apertura'
					label='Monto Mínimo Apertura'
					newLine={true}
				/>

				<Text
					name='monto_maximo_retiros_timedeposits1'
					size='md'
					placeholder='Monto Maximo Retiros'
					label='Monto Maximo Retiros'
				/>
				<Text
					name='monto_promedio_mensual_timedeposits1'
					size='md'
					placeholder='Monto Promedio Mensual'
					label='Monto Promedio Mensual'
					newLine={true}
				/>
				<Text
					name='monto_retiros_mensuales_timedeposits1'
					size='md'
					placeholder='Monto Retiros Mensuales_timedeposits1'
					label='Monto Retiros Mensuales'
				/>
			</div>
		</RetractileForm>
	)
}

export default TimeDeposits

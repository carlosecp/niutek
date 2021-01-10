// React and Router Stuff
import React from 'react'
// Other Components
import { Text } from '../../utils/forms'
import RetractileForm from '../../utils/retractile_sections'

const OriginFunds = () => {
	return (
		<RetractileForm id='Origen Fondos' formTitle='Origen Fondos'>
			<div className='form-grid-layout'>
				<Text
					name='origen_fondos_negocio_propio_nombre'
					size='md'
					placeholder='Nombre del Negocio'
					label='Nombre del Negocio'
				/>
				<Text
					name='origen_fondos_profesion_independiente_profesion'
					size='md'
					newline={true}
					placeholder='Profesión de ejerce'
					label='Profesión de ejerce'
				/>
				<Text
					name='origen_fondos_herencia_procedencia'
					size='md'
					newline={true}
					placeholder='Procedencia'
					label='Procedencia'
				/>
				<Text
					name='origen_fondos_herencia_monto'
					size='md'
					placeholder='Monto'
					label='Monto'
					type='number'
					min='0'
				/>
				<Text
					name='origen_fondos_inversiones_tipo'
					size='md'
					placeholder='Tipo de Inversiones'
					label='Tipo de Inversiones'
					newline={true}
				/>
				<Text
					name='origen_fondos_prestamo_institucion'
					size='md'
					placeholder='Institucion Financiera'
					label='Institucion Financiera'
					newline={true}
				/>
				<Text
					name='origen_fondos_ventas_producto'
					size='md'
					placeholder='Venta de...'
					label='Ventas'
					newline={true}
				/>
				<Text
					name='origen_fondos_ahorro_institucion'
					size='md'
					placeholder='Institución Financiera'
					label='Institución Financiera'
					newline={true}
				/>

				<Text
					name='origen_fondos_otros_descripcion'
					size='md'
					placeholder='Especifique'
					label='Otros'
					newline={true}
				/>
			</div>
		</RetractileForm>
	)
}

export default OriginFunds

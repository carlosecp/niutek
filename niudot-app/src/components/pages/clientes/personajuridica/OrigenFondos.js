import React from 'react'
import {
	FormCheckboxInput,
	FormTextInput
} from '../../utils/formikComponentsEndpoint'
import RetractileForm from '../../utils/RetractileForm'

function OrigenFondos() {
	return (
		<RetractileForm id='Origen Fondos' formTitle='Origen Fondos'>
			<div className='form-grid-layout'>
				<FormTextInput
					name='origen_fondos_negocio_propio_nombre'
					size='lg'
					placeholder='Nombre del Negocio'
					label='Nombre del Negocio'
				/>
				<FormTextInput
					name='origen_fondos_profesion_independiente_profesion'
					size='lg'
					newLine={true}
					placeholder='Profesión de ejerce'
					label='Profesión de ejerce'
				/>
				<FormTextInput
					name='origen_fondos_herencia_procedencia'
					size='lg'
					newLine={true}
					placeholder='Procedencia'
					label='Procedencia'
				/>
				<FormTextInput
					name='origen_fondos_herencia_monto'
					size='lg'
					placeholder='Monto'
					label='Monto'
					type='number'
					min='0'
				/>
				<FormTextInput
					name='origen_fondos_inversiones_tipo'
					size='lg'
					placeholder='Tipo de Inversiones'
					label='Tipo de Inversiones'
					newLine={true}
				/>
				<FormTextInput
					name='origen_fondos_prestamo_institucion'
					size='md'
					placeholder='Institucion Financiera'
					label='Institucion Financiera'
					newLine={true}
				/>
				<FormTextInput
					name='origen_fondos_ventas_producto'
					size='md'
					placeholder='Venta de...'
					label='Ventas'
					newLine={true}
				/>
				<FormTextInput
					name='origen_fondos_ahorro_institucion'
					size='md'
					placeholder='Institución Financiera'
					label='Institución Financiera'
					newLine={true}
				/>
				
					<FormTextInput
						name='origen_fondos_otros_descripcion'
						size='md'
						placeholder='Especifique'
						label='Otros'
						newLine={true}
					/>
				
			</div>
		</RetractileForm>
	)
}

export default OrigenFondos

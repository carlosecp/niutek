import React from 'react'
import {
	FormCheckboxInput,
	FormTextInput
} from '../../utils/formikComponentsEndpoint'
import RetractileForm from '../../utils/RetractileForm'

function OrigenFondos() {
	return (
		<RetractileForm id='Muere Juan' formTitle='Origen Fondos'>
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
					newLine={true}
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
				/>
				<FormTextInput
					name='origen_fondos_prestamo_institucion'
					size='md'
					placeholder='Institucion Financiera'
					label='Institucion Financiera'
				/>
				<FormTextInput
					name='origen_fondos_ventas_producto'
					size='md'
					placeholder='Productos'
					label='Productos'
				/>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_salario'
						size='md'
						description='Salario'
						label='Salario'
					/>
				</div>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_ahorro'
						size='md'
						description='Ahorro'
					/>
					<FormTextInput
						name='origen_fondos_ahorro_institucion'
						size='md'
						placeholder='Institución Financiera'
						label='Institución Financiera'
					/>
				</div>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_otros'
						size='md'
						description='Otros'
					/>
					<FormTextInput
						name='origen_fondos_otros_descripcion'
						size='md'
						placeholder='Especifique'
						label='Especifique'
					/>
				</div>{' '}
			</div>
		</RetractileForm>
	)
}

export default OrigenFondos

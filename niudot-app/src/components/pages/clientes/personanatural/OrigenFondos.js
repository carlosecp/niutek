import React from 'react'
import {
	FormCheckboxInput,
	FormTextInput
} from '../../utils/formikComponentsEndpoint'
import RetractileForm from '../../utils/RetractileForm'

function OrigenFondos() {
	return (
		<>
			<RetractileForm formTitle='Origen Fondos'>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_negocio_propio'
						size='lg-mobile'
						description='Negocio Propio'
					/>
					<FormTextInput
						name='origen_fondos_negocio_propio_nombre'
						size='lg-mobile'
						placeholder='Nombre del Negocio'
						label='Nombre del Negocio'
					/>
				</div>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_profesion_independiente'
						size='lg-mobile'
						description='Profesión Independiente'
					/>
					<FormTextInput
						name='origen_fondos_profesion_independiente_profesion'
						size='lg-mobile'
						placeholder='Profesión de ejerce'
						label='Profesión de ejerce'
					/>
				</div>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_herencia'
						size='lg-mobile'
						description='Herencia'
					/>
					<FormTextInput
						name='origen_fondos_herencia_procedencia'
						size='sm'
						placeholder='Procedencia'
						label='Procedencia'
					/>
					<FormTextInput
						name='origen_fondos_herencia_monto'
						size='sm'
						placeholder='Monto'
						label='Monto'
						type='number'
						min='0'
					/>
				</div>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_inversiones'
						size='lg-mobile'
						description='Inversiones'
					/>
					<FormTextInput
						name='origen_fondos_inversiones_tipo'
						size='lg-mobile'
						placeholder='Tipo de Inversiones'
						label='Tipo de Inversiones'
					/>
				</div>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_prestamo'
						size='lg-mobile'
						description='Préstamo'
					/>
					<FormTextInput
						name='origen_fondos_prestamo_institucion'
						size='lg-mobile'
						placeholder='Institucion Financiera'
						label='Institucion Financiera'
					/>
				</div>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_ventas'
						size='lg-mobile'
						description='Ventas'
					/>
					<FormTextInput
						name='origen_fondos_ventas_producto'
						size='lg-mobile'
						placeholder='Productos'
						label='Productos'
					/>
				</div>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_salario'
						size='lg-mobile'
						description='Salario'
						label='Salario'
					/>
				</div>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_ahorro'
						size='lg-mobile'
						description='Ahorro'
					/>
					<FormTextInput
						name='origen_fondos_ahorro_institucion'
						size='lg-mobile'
						placeholder='Institución Financiera'
						label='Institución Financiera'
					/>
				</div>
				<div className='checkbox-description'>
					<FormCheckboxInput
						name='origen_fondos_otros'
						size='lg-mobile'
						description='Otros'
					/>
					<FormTextInput
						name='origen_fondos_otros_descripcion'
						size='lg-mobile'
						placeholder='Especifique'
						label='Especifique'
					/>
				</div>
			</RetractileForm>
		</>
	)
}

export default OrigenFondos

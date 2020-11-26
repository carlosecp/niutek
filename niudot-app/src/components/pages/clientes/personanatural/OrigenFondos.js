import React from 'react'
import {
	FormCheckboxInput,
	FormTextInput
} from '../../utils/formikComponentsEndpoint'
import RetractileForm from '../../utils/RetractileForm'

function OrigenFondos() {
	return (
		<>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_negocio_propio'
					size='lg'
					title='Negocio Propio'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_negocio_propio_nombre'
					size='lg'
					placeholder='Nombre del Negocio'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_profesion_independiente'
					size='lg'
					title='Profesión Independiente'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_profesion_independiente_profesion'
					size='lg'
					placeholder='Profesión de ejerce'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_herencia'
					size='lg'
					title='Herencia'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_herencia_procedencia'
					size='sm'
					placeholder='Procedencia'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_herencia_monto'
					size='sm'
					placeholder='Monto'
					showLabel={false}
					type='number'
					min='0'
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_inversiones'
					size='lg'
					title='Inversiones'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_inversiones_tipo'
					size='lg'
					placeholder='Tipo de Inversiones'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_prestamo'
					size='lg'
					title='Préstamo'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_prestamo_institucion'
					size='lg'
					placeholder='Institucion Financiera'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_ventas'
					size='lg'
					title='Ventas'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_ventas_producto'
					size='lg'
					placeholder='Productos'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_salario'
					size='lg'
					title='Salario'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_ahorro'
					size='lg'
					title='Ahorro'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_ahorro_institucion'
					size='lg'
					placeholder='Institución Financiera'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_otros'
					size='lg'
					title='Otros'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_otros_descripcion'
					size='lg'
					placeholder='Especifique'
					showLabel={false}
				/>
			</div>
		</>
	)
}

export default OrigenFondos

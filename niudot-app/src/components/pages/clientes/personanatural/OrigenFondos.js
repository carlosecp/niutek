import React from 'react'
import {
	FormCheckboxInput,
	FormTextInput
} from '../../utils/formikComponentsEndpoint'
import RetractileForm from '../../utils/RetractileForm'

function OrigenFondos() {
	return (
		<RetractileForm formTitle='Origen de Fondos'>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_negocio_propio'
					classes='lg'
					title='Negocio Propio'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_negocio_propio_nombre'
					classes='lg'
					placeholder='Nombre del Negocio'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_profesion_independiente'
					classes='lg'
					title='Profesión Independiente'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_profesion_independiente_profesion'
					classes='lg'
					placeholder='Profesión de ejerce'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_herencia'
					classes='lg'
					title='Herencia'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_herencia_procedencia'
					classes='sm'
					placeholder='Procedencia'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_herencia_monto'
					classes='sm'
					placeholder='Monto'
					showLabel={false}
					type='number'
					min='0'
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_inversiones'
					classes='lg'
					title='Inversiones'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_inversiones_tipo'
					classes='lg'
					placeholder='Tipo de Inversiones'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_prestamo'
					classes='lg'
					title='Préstamo'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_prestamo_institucion'
					classes='lg'
					placeholder='Institucion Financiera'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_ventas'
					classes='lg'
					title='Ventas'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_ventas_producto'
					classes='lg'
					placeholder='Productos'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_salario'
					classes='lg'
					title='Salario'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_ahorro'
					classes='lg'
					title='Ahorro'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_ahorro_institucion'
					classes='lg'
					placeholder='Institución Financiera'
					showLabel={false}
				/>
			</div>
			<div className='form form-container form-retractile-form'>
				<FormCheckboxInput
					name='origen_fondos_otros'
					classes='lg'
					title='Otros'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_otros_descripcion'
					classes='lg'
					placeholder='Especifique'
					showLabel={false}
				/>
			</div>
		</RetractileForm>
	)
}

export default OrigenFondos

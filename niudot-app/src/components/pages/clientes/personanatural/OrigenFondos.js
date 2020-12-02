import React from 'react'
import {
	FormCheckboxInput,
	FormTextInput,
	FormDropdownInput
} from '../../utils/formikComponentsEndpoint'
import RetractileForm from '../../utils/RetractileForm'

function OrigenFondos() {
	return (
		<>
			<RetractileForm formTitle='Origen Fondos'>
				<div className='grid grid-cols-12 gap-2 max-w-xl '>
					<FormCheckboxInput
						name='origen_fondos_negocio_propio'
						size='lg'
						placeholder='Negocio Propio'
						showLabel={false}
					/>
				</div>

				<div className='grid grid-cols-12 gap-2 max-w-xl'>
					<FormTextInput
						name='origen_fondos_negocio_propio_nombre'
						size='lg'
						placeholder='Nombre del Negocio'
						showLabel={false}
					/>
				</div>
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
				<FormCheckboxInput
					name='origen_fondos_herencia'
					size='lg'
					placeholder='Herencia'
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
				<FormCheckboxInput
					name='origen_fondos_inversiones'
					size='lg'
					placeholder='Inversiones'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_inversiones_tipo'
					size='lg'
					placeholder='Tipo de Inversiones'
					showLabel={false}
				/>

				<FormCheckboxInput
					name='origen_fondos_prestamo'
					size='lg'
					placeholder='Préstamo'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_prestamo_institucion'
					size='lg'
					placeholder='Institucion Financiera'
					showLabel={false}
				/>
				<FormCheckboxInput
					name='origen_fondos_ventas'
					size='lg'
					placeholder='Ventas'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_ventas_producto'
					size='lg'
					placeholder='Productos'
					showLabel={false}
				/>
				<FormCheckboxInput
					name='origen_fondos_salario'
					size='lg'
					placeholder='Salario'
					showLabel={false}
				/>

				<FormCheckboxInput
					name='origen_fondos_ahorro'
					size='lg'
					placeholder='Ahorro'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_ahorro_institucion'
					size='lg'
					placeholder='Institución Financiera'
					showLabel={false}
				/>
				<FormCheckboxInput
					name='origen_fondos_otros'
					size='lg'
					placeholder='Otros'
					showLabel={false}
				/>
				<FormTextInput
					name='origen_fondos_otros_descripcion'
					size='lg'
					placeholder='Especifique'
					showLabel={false}
				/>
			</RetractileForm>
		</>
	)
}

export default OrigenFondos

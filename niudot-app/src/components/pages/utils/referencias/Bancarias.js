import React from 'react'
import { FormDropdownInput, FormTextInput } from '../formikComponentsEndpoint'
import RetractileForm from '../RetractileForm'

function Bancarias() {
	return (
		<RetractileForm formTitle='Bancarias'>
			<div className='form-container'>
				<FormTextInput
					name='nombre_entidad'
					classes='lg'
					placeholder='Nombre de la entidad'
				/>

				<FormTextInput
					name='inicio_relacion'
					classes='lg-nl'
					placeholder='Fecha inicio de la relación'
				/>

				<FormTextInput
					name='tipo_servicio'
					classes='lg'
					placeholder='Tipo de servicio recibido'
				/>

				<FormTextInput
					name='tiempo_entidad'
					classes='lg'
					placeholder='Años con la entidad'
				/>

				<FormTextInput name='telefono' classes='lg' placeholder='Teléfono' />

				<FormTextInput
					name='numero_cuenta'
					classes='sm'
					placeholder='Número de cuenta'
				/>

				<FormDropdownInput classes='sm' name='moneda'>
					<option value='option_1'>Option 1</option>
					<option value='option_2'>Option 2</option>
					<option value='option_3'>Option 3</option>
					<option value='option_4'>Option 4</option>
				</FormDropdownInput>

				<FormTextInput name='nombre_banco' classes='lg' placeholder='Nombre del banco' />

				<FormTextInput name='numero_cuenta' classes='sm' placeholder='Número de cuenta' />

				{/*
					// * Todas estas son dropdowns, las vamos a tener que refactorizar, pero todas son la misma dropdown, asi que mejor iteremos un lista, no tengo energias para pensar hoy.
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded-l'
						placeholder='Moneda'
					/>
					<div className='btn input-btn-transparent rounded-r'>
						<FaChevronDown />
					</div>
				</div>
				 <div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Nombre del banco'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Número de cuenta'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded-l'
						placeholder='Moneda'
					/>
					<div className='btn input-btn-transparent rounded-r'>
						<FaChevronDown />
					</div>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Nombre del banco'
					/>
				</div> */}
			</div>
		</RetractileForm>
	)
}

export default Bancarias

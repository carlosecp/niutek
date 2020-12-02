import React from 'react'
import { FormDropdownInput, FormTextInput } from '../formikComponentsEndpoint'
import RetractileForm from '../RetractileForm'

function Bancarias() {
	return (
			<RetractileForm formTitle='Bancarias'>
				<div className='grid grid-cols-12 gap-2 max-w-xl'>
					<FormTextInput
						name='ref_bancarias_nombre_entidad'
						size='lg'
						placeholder='Nombre de la entidad'
						label='Nombre de la entidad'
					/>

					<FormTextInput
						name='ref_bancarias_fecha_relacion'
						size='lg-nl'
						placeholder='Fecha inicio de la relación'
						label='Fecha inicio de la relación'
					/>

					<FormTextInput
						name='ref_bancarias_tipo_servicio'
						size='lg'
						placeholder='Tipo de servicio recibido'
						label='Tipo de servicio recibido'
					/>

					<FormTextInput
						name='ref_bancarias_tiempo_entidad'
						size='lg'
						placeholder='Años con la entidad'
						label='Años con la entidad'
						type='number'
						min='0'
					/>

					<FormTextInput
						name='ref_bancarias_telefono'
						size='lg'
						placeholder='Teléfono'
						label='Teléfono'
					/>

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

					<FormTextInput
						name='ref_bancarias_numero_cuenta'
						size='sm'
						placeholder='Número de cuenta'
						label='Número de cuenta'
					/>
					<FormDropdownInput
						size='sm'
						name='ref_bancarias_moneda'
						label='Moneda'
					>
						<option value='option_1'>Option 1</option>
						<option value='option_2'>Option 2</option>
						<option value='option_3'>Option 3</option>
						<option value='option_4'>Option 4</option>
					</FormDropdownInput>

					<FormTextInput
						name='ref_bancarias_nombre_banco'
						size='lg'
						placeholder='Nombre del banco'
						label='Nombre del banco'
					/>
				</div>
			</RetractileForm>
	)
}

export default Bancarias

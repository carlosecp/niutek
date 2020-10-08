import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FormTextInput } from '../formikComponentsEndpoint'
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
				</div>
			</div>
		</RetractileForm>
	)
}

export default Bancarias

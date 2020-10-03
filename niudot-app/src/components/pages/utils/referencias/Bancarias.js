import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import RetractileForm from '../RetractileForm'

function Bancarias() {
	return (
		<RetractileForm formTitle='Bancarias'>
			<form className='form-container'>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Nombre de la entidad'
					/>
				</div>
				<div className='form-field-lg-nl'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Fecha inicio de la relación'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Tipo de servicio recibido'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Años con la entidad'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Teléfono'
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
			</form>
		</RetractileForm>
	)
}

export default Bancarias

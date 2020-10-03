import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import RetractileForm from '../RetractileForm'

function Personales({ title }) {
	return (
		<RetractileForm formTitle={title}>
			<form className='form-container'>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Nombres'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Apellidos'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded-l'
						placeholder='Tipo de Identificacion'
					/>
					<div className='btn input-btn-transparent rounded-r'>
						<FaChevronDown />
					</div>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='No. Identificación'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Nacionalidad'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Fecha de nacimiento'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded-l'
						placeholder='Estado civil'
					/>
					<div className='btn input-btn-transparent rounded-r'>
						<FaChevronDown />
					</div>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Número de hijos'
					/>
				</div>
				<div className='form-field-xl'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Dirección'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Tiempo de conocer al referido'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Email'
					/>
				</div>
			</form>
		</RetractileForm>
	)
}

export default Personales

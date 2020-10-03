import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import DatosProfesionalesEconomicos from './DatosProfesionalesEconomicos'
import Referencias from '../../utils/referencias/Referencias'

function PersonaNaturalCreate() {
	return (
		<div className='form'>
			<div className='form-title-container'>
				<h2>Crear Un Nuevo Cliente</h2>
				<p className='form-description'>Registra un nuevo cliente.</p>
			</div>
			<form className='form-container'>
				<div className='form-field-md'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Código de Cliente'
					/>
				</div>
				<div className='form-field-lg-nl'>
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
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='No. Identificacion'
					/>
				</div>
				<div className='form-field-lg'>
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
						placeholder='Fecha de Nacimiento'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Estado Civil'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Número de Hijos'
					/>
				</div>
				<div className='form-field-xl'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Dirección'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Teléfono 1'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Teléfono 2'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Municipio'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Departamento'
					/>
				</div>
				<div className='form-field-lg'>
					<div className='std-input rounded'>
						<input type='checkbox' />
						<div className='input-checkbox-content'>
							Ha desempeñado un cargo público
						</div>
					</div>
				</div>
			</form>
			<DatosProfesionalesEconomicos />			
			<Referencias />
		</div>
	)
}

export default PersonaNaturalCreate

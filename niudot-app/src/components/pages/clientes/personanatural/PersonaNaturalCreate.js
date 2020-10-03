import React from 'react'
import { Transition } from 'react-transition-group'
import { FaChevronDown } from 'react-icons/fa'
import DatosProfesionalesEconomicos from './DatosProfesionalesEconomicos'
import Referencias from '../../utils/referencias/Referencias'

function PersonaNaturalCreate({ in: inProp }) {
	const defaultStyles = {
		transition: 'opacity 500ms ease-in-out',
		opacity: 0
	}

	const transitionStyles = {
		entering: { opacity: 1 },
		entered: { opacity: 1 },
		exiting: { opacity: 0 },
		exited: { opacity: 0 }
	}

	return (
		<Transition in={inProp} timeout={500}>
			{(state) => (
				<div
					className='form'
					style={{ ...defaultStyles, ...transitionStyles[state] }}
				>
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
			)}
		</Transition>
	)
}

export default PersonaNaturalCreate

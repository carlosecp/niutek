import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import RetractileForm from '../../utils/RetractileForm'

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

			<RetractileForm formTitle='Datos Profesionales y Económicos'>
				<form className='form-container'>
					<div className='form-field-lg'>
						<input
							type='text'
							className='std-input rounded'
							placeholder='Profesion u oficio'
						/>
					</div>
					<div className='form-field-lg'>
						<input
							type='text'
							className='std-input rounded'
							placeholder='Ocupación / Puesto'
						/>
					</div>
					<div className='form-field-lg'>
						<input
							type='text'
							className='std-input rounded'
							placeholder='Nombre de la empresa'
						/>
					</div>
					<div className='form-field-lg'>
						<input
							type='text'
							className='std-input rounded'
							placeholder='Descripción actividad de la empresa'
						/>
					</div>
					<div className='form-field-sm-nl'>
						<input
							type='text'
							className='std-input rounded'
							placeholder='Teléfono Empresa'
						/>
					</div>
					<div className='form-field-sm'>
						<input
							type='text'
							className='std-input rounded'
							placeholder='Email empresa'
						/>
					</div>
					<div className='form-field-lg'>
						<input
							type='text'
							className='std-input rounded'
							placeholder='Ingreso anual aproximado'
						/>
					</div>
				</form>
			</RetractileForm>
			<RetractileForm formTitle='Referencias'>
				<RetractileForm formTitle='Referencias Comerciales'>
					<form className="form-container">
						<div className='form-field-lg'>
							<input
								type='text'
								className='std-input rounded'
								placeholder='Nombre de la entidad'
							/>
						</div>
						<div className='form-field-lg'>
							<input
								type='text'
								className='std-input rounded'
								placeholder='Persona de contacto'
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
					</form>
				</RetractileForm>
				<RetractileForm formTitle='Referencias Bancarias'>
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

				<RetractileForm formTitle='Referencias Personales 1'>
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
				<RetractileForm formTitle='Referencias Personales 2'>
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

				

			</RetractileForm>
		</div>
	)
}

export default PersonaNaturalCreate

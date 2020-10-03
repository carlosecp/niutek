import React from 'react'
import RetractileForm from '../../utils/RetractileForm'

function OrigenFondos() {
	return (
		<RetractileForm formTitle='Origen de Fondos'>
			<form className='form-container form-retractile-form'>
				<div className='form-field-lg'>
					<div className='std-input rounded'>
						<input type='checkbox' />
						<div className='input-checkbox-content'>Donación</div>
					</div>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Nombre del negocio'
					/>
				</div>
			</form>

			<form className='form-container form-retractile-form'>
				<div className='form-field-lg'>
					<div className='std-input rounded'>
						<input type='checkbox' />
						<div className='input-checkbox-content'>Herencia</div>
					</div>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Procedencia'
					/>
				</div>
				<div className='form-field-sm'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Monto Herencia'
					/>
				</div>
			</form>

			<form className='form-container form-retractile-form'>
				<div className='form-field-lg'>
					<div className='std-input rounded'>
						<input type='checkbox' />
						<div className='input-checkbox-content'>Inversiones</div>
					</div>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Tipo de inversiones'
					/>
				</div>
			</form>

			<form className='form-container form-retractile-form'>
				<div className='form-field-lg'>
					<div className='std-input rounded'>
						<input type='checkbox' />
						<div className='input-checkbox-content'>Préstamo</div>
					</div>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Institución Financiera'
					/>
				</div>
			</form>

			<form className='form-container form-retractile-form'>
				<div className='form-field-lg'>
					<div className='std-input rounded'>
						<input type='checkbox' />
						<div className='input-checkbox-content'>Ventas</div>
					</div>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Venta de '
					/>
				</div>
			</form>

			<form className='form-container form-retractile-form'>
				<div className='form-field-xl'>
					<div className='std-input rounded'>
						<input type='checkbox' />
						<div className='input-checkbox-content'>
							Ingresos por giro comercial de la empresa
						</div>
					</div>
				</div>
			</form>

			<form className='form-container form-retractile-form'>
				<div className='form-field-lg'>
					<div className='std-input rounded'>
						<input type='checkbox' />
						<div className='input-checkbox-content'>Oporte de los socios</div>
					</div>
				</div>
			</form>

			<form className='form-container form-retractile-form'>
				<div className='form-field-lg-nl'>
					<div className='std-input rounded'>
						<input type='checkbox' />
						<div className='input-checkbox-content'>Otros</div>
					</div>
				</div>
				<div className='form-field-lg'>
					<input type='text' className='std-input rounded' placeholder='Especifique' />
				</div>
			</form>
		</RetractileForm>
	)
}

export default OrigenFondos

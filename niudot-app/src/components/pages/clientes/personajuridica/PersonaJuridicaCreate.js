import React from 'react'
import { useFormik } from 'formik'

function PersonaJuridicaCreate() {
	const formik = useFormik({
		initialValues: {
			codigoCliente: '',
			// razonSocial
		}
	})

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
				<div className='form-field-xl'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Razón social de la empresa'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded-l'
						placeholder='Tipo de Identificacion'
					/>
					<div className='btn input-btn-primary rounded-r'></div>
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
						placeholder='No. de empleados'
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
						placeholder='Fecha de constitución'
					/>
				</div>
				<div className='form-field-lg'>
					<input
						type='text'
						className='std-input rounded'
						placeholder='Fecha de personería'
					/>
				</div>
			</form>
		</div>
	)
}

export default PersonaJuridicaCreate

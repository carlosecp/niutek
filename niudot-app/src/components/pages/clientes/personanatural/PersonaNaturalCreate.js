import React from 'react'
import { Form } from 'formik'
import DatosProfesionalesEconomicos from './DatosProfesionalesEconomicos'
import Referencias from '../../utils/referencias/Referencias'
import NuevoCliente from './NuevoCliente'

function PersonaNaturalCreate() {
	return (
		<Form className='form'>
			<div className='form-title-container'>
				<h2>Crear Un Nuevo Cliente</h2>
				<p className='form-description'>Registra un nuevo cliente.</p>
			</div>

			<NuevoCliente />

			<DatosProfesionalesEconomicos />
			
			<Referencias />

			<div className='form'>
				<div className='form-container form-btn-container'>
					<div className='form-field-sm-nl'>
						<button type='submit' className='form-submit-btn rounded'>
							Submit
						</button>
					</div>
					<div className='form-field-sm'>
						<button type='cancel' className='form-cancel-btn rounded'>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</Form>
	)
}

export default PersonaNaturalCreate

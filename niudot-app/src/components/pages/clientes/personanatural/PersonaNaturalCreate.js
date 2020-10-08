import React from 'react'
import { Formik, Form } from 'formik'
import DatosProfesionalesEconomicos from './DatosProfesionalesEconomicos'
import Referencias from '../../utils/referencias/Referencias'
import NuevoCliente from './NuevoCliente'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import RightMenu from '../../../layout/right-menu/RightMenu'


function PersonaNaturalCreate() {
	
	return (
		<Formik
			initialValues={{
				codigoCliente: '',
				nombres: '',
				apellidos: '',
				tipoId: '',
				numeroId: '',
				nacionalidad: '',
				fechaNacimiento: '',
				estadoCivil: '',
				numeroHijos: '',
				direccion: '',
				telefono1: '',
				telefono2: '',
				municipio: '',
				departamento: '',
				cargoPublico: false,
				profesion: ''
			}}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
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
								Guardar
							</button>
						</div>
						<div className='form-field-sm'>
							<button type='cancel' className='form-cancel-btn rounded'>
								Cancelar
							</button>
						</div>
					</div>
					
				</div>
			</Form>
		</Formik>
	)
}


export default PersonaNaturalCreate
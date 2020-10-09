import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import DatosProfesionalesEconomicos from './DatosProfesionalesEconomicos'
import Referencias from '../../utils/referencias/Referencias'
import NuevoCliente from './NuevoCliente'
import SubmitBtn from '../../utils/SubmitBtn'

const initialValues = {
	codigo_cliente: '',
	nombres: '',
	apellidos: '',
	tipo_id: '',
	numero_id: '',
	nacionalidad: '',
	fecha_nacimiento: '',
	estado_civil: '',
	numero_hijos: 0,
	direccion: '',
	telefono_1: '',
	telefono_2: '',
	municipio: '',
	departamento: '',
	cargo_publico: false,
	profesion: '',
	ocupacion: '',
	nombre_empresa: '',
	descripcion_actividad_empresa: '',
	telefono_empresa: '',
	email_empresa: '',
	ingreso_anual: ''
}

const YupValidationSchema = Yup.object().shape({
	codigo_cliente: Yup.string()
		.min(15, 'Minimo 15 caracteres')
		.required('Requerido'),
	nombres: Yup.string().min(15, 'Minimo 15 caracteres').required('Requerido'),
	apellidos: Yup.string().min(15, 'Minimo 15 caracteres').required('Requerido'),
	numero_id: Yup.string().min(15, 'Minimo 15 caracteres').required('Requerido'),
	nacionalidad: Yup.string().min(15, 'Minimo 15 caracteres').required('Requerido'),
	fecha_nacimiento: Yup.string().min(15, 'Minimo 15 caracteres').required('Requerido'),
	
})

function PersonaNaturalCreate() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={YupValidationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className='form'>
				<div className='form-title-container'>
					<h2>Crear Un Nuevo Cliente</h2>
					<p className='form-description'>Crear un nuevo cliente.</p>
				</div>
				<NuevoCliente id='nuevo-cliente' />
				<DatosProfesionalesEconomicos id='datos-profesionales-economicos' />
				<Referencias id='referencias' />
				<SubmitBtn />
			</Form>
		</Formik>
	)
}

export default PersonaNaturalCreate

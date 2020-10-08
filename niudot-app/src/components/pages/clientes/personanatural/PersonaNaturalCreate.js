import React from 'react'
import { Formik, Form } from 'formik'
import DatosProfesionalesEconomicos from './DatosProfesionalesEconomicos'
import Referencias from '../../utils/referencias/Referencias'
import NuevoCliente from './NuevoCliente'
import SubmitBtn from '../../utils/SubmitBtn'

function PersonaNaturalCreate() {
	return (
		<Formik
			initialValues={{
				'codigo_cliente': '',
				'nombres': '',
				'apellidos': '',
				'tipo_id': '',
				'numero_id': '',
				'nacionalidad': '',
				'fecha_nacimiento': '',
				'estado_civil': '',
				'numero_hijos': '',
				'direccion': '',
				'telefono_1': '',
				'telefono_2': '',
				'municipio': '',
				'departamento': '',
				'cargo_publico': false,
				'profesion': '',
				'ocupacion': '',
				'nombre_empresa': '',
				'descripcion_actividad_empresa': '',
				'telefono_empresa': '',
				'email_empresa': '',
				'ingreso_anual': ''
			}}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<Form className='form'>
				<div className='form-title-container'>
					<h2>Crear Un Nuevo Cliente</h2>
				</div>
				<NuevoCliente id="nuevo-cliente" />
				<DatosProfesionalesEconomicos id="datos-profesionales-economicos"/>
				<Referencias  id="referencias"/>
				<SubmitBtn />
			</Form>
		</Formik>
	)
}


export default PersonaNaturalCreate
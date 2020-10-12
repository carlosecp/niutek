import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import DatosProfesionalesEconomicos from './DatosProfesionalesEconomicos'
import Referencias from '../../utils/referencias/Referencias'
import NuevoCliente from './NuevoCliente'
import SubmitBtn from '../../utils/SubmitBtn'
import {
	GenerateYupBoolean,
	GenerateYupDropdown,
	GenerateYupNumber,
	GenerateYupString
} from '../../utils/yupValidationEndpoint'
import {
	createValues,
	datosValues,
	refComercialesValues,
	refBancariasValues,
	refPersonales1Values,
	refPersonales2Values
} from './formInitialValues'

export const initialValues = {
	...createValues,
	...datosValues,
	...refComercialesValues,
	...refBancariasValues,
	...refPersonales1Values,
	...refPersonales2Values
}

const YupValidationSchema = Yup.object().shape({
	// Create New Client
	create_codigo_cliente: GenerateYupString(),
	create_nombres: GenerateYupString(),
	create_apellidos: GenerateYupString(),
	create_tipo_id: GenerateYupDropdown(),
	create_numero_id: GenerateYupNumber(),
	create_nacionalidad: GenerateYupString(5),
	create_fecha_nacimiento: GenerateYupString(5),
	create_estado_civil: GenerateYupString(5),
	create_numero_hijos: GenerateYupNumber(),
	create_direccion: GenerateYupString(),
	create_telefono_1: GenerateYupString(5),
	create_telefono_2: GenerateYupString(5),
	create_municipio: GenerateYupString(),
	create_departamento: GenerateYupString(5),
	create_cargo_publico: GenerateYupBoolean(),
	// Datos Profesiones y Economicos
	datos_profesion: GenerateYupString(),
	datos_ocupacion: GenerateYupString(),
	datos_nombre_empresa: GenerateYupString(),
	datos_descripcion_actividad_empresa: GenerateYupString(),
	datos_telefono_empresa: GenerateYupString(),
	datos_email_empresa: GenerateYupString(),
	datos_ingreso_anual: GenerateYupNumber(),
	// Referencias Comeciales
	ref_comerciales_nombre_entidad: GenerateYupString(),
	ref_comerciales_persona_contacto: GenerateYupString(),
	ref_comerciales_direccion: GenerateYupString(),
	ref_comerciales_tiempo_entidad: GenerateYupNumber(),
	ref_comerciales_telefono: GenerateYupString(),
	// Referencias Bancarias
	ref_bancarias_nombre_entidad: GenerateYupString(),
	ref_bancarias_fecha_relacion: GenerateYupString(),
	ref_bancarias_tipo_servicio: GenerateYupString(),
	ref_bancarias_tiempo_entidad: GenerateYupNumber(),
	ref_bancarias_telefono: GenerateYupString(),
	ref_bancarias_numero_cuenta: GenerateYupString(),
	ref_bancarias_nombre_banco: GenerateYupString(),
	// Referencias Personales 1
	ref_personales_1_nombres: GenerateYupString(),
	ref_personales_1_apellidos: GenerateYupString(),
	ref_personales_1_tipo_id: GenerateYupDropdown(),
	ref_personales_1_numero_id: GenerateYupString(),
	ref_personales_1_nacionalidad: GenerateYupString(),
	ref_personales_1_fecha_nacimiento: GenerateYupString(),
	ref_personales_1_estado_civil: GenerateYupDropdown(),
	ref_personales_1_numero_hijos: GenerateYupNumber(),
	ref_personales_1_direccion: GenerateYupString(),
	ref_personales_1_tiempo_relacion: GenerateYupNumber(),
	ref_personales_1_email: GenerateYupString(),
	// Referencias personales 2
	ref_personales_2_nombres: GenerateYupString(),
	ref_personales_2_apellidos: GenerateYupString(),
	ref_personales_2_tipo_id: GenerateYupDropdown(),
	ref_personales_2_numero_id: GenerateYupString(),
	ref_personales_2_nacionalidad: GenerateYupString(),
	ref_personales_2_fecha_nacimiento: GenerateYupString(),
	ref_personales_2_estado_civil: GenerateYupDropdown(),
	ref_personales_2_numero_hijos: GenerateYupString(),
	ref_personales_2_direccion: GenerateYupString(),
	ref_personales_2_tiempo_relacion: GenerateYupNumber(),
	ref_personales_2_email: GenerateYupString()
})

function PersonaNaturalCreate() {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={YupValidationSchema}
			onSubmit={(values) => {
				console.log(values)
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

import * as Yup from 'yup'

export const createValues = {
	create_codigo_cliente: '',
	create_nombres: '',
	create_apellidos: '',
	create_tipo_id: '',
	create_numero_id: '',
	create_nacionalidad: '',
	create_fecha_nacimiento: '',
	create_estado_civil: '',
	create_numero_hijos: 0,
	create_direccion: '',
	create_telefono_1: '',
	create_telefono_2: '',
	create_municipio: '',
	create_departamento: '',
	create_cargo_publico: false
}

export const createValuesSchema = {
	create_nombres: Yup.string()
		.min(1)
		.max(25, 'Longitud Maxima: 25')
		.required('Campo Requerido'),
	create_apellidos: Yup.string()
		.max(25, 'Longitud Maxima: 25')
		.required('Campo Requerido'),
	create_numero_id: Yup.string()
		.max(15, 'Longitud Maxima: 15')
		.required('Campo Requerido'),
	create_nacionalidad: Yup.string()
		.max(25, 'Longitud Maxima: 25')
		.required('Campo Requerido'),
	create_fecha_nacimiento: Yup.string().max()
}

export const origenFondos = {
	origen_fondos_negocio_propio: false,
	origen_fondos_negocio_propio_nombre: '',
	origen_fondos_profesion_independiente: false,
	origen_fondos_profesion_independiente_profesion: '',
	origen_fondos_herencia: false,
	origen_fondos_herencia_procedencia: '',
	origen_fondos_herencia_monto: 0,
	origen_fondos_inversiones: false,
	origen_fondos_inversiones_tipo: '',
	origen_fondos_prestamo: false,
	origen_fondos_prestamo_institucion: '',
	origen_fondos_salario: false,
	origen_fondos_ventas: false,
	origen_fondos_ventas_producto: '',
	origen_fondos_ahorro: false,
	origen_fondos_ahorro_institucion: '',
	origen_fondos_otros: false,
	origen_fondos_otros_descripcion: ''
}

export const datosValues = {
	datos_profesion: '',
	datos_ocupacion: '',
	datos_nombre_empresa: '',
	datos_descripcion_actividad_empresa: '',
	datos_telefono_empresa: '',
	datos_email_empresa: '',
	datos_ingreso_anual: ''
}

export const refComercialesValues = {
	ref_comerciales_nombre_entidad: '',
	ref_comerciales_persona_contacto: '',
	ref_comerciales_direccion: '',
	ref_comerciales_tiempo_entidad: 0,
	ref_comerciales_telefono: ''
}

export const refBancariasValues = {
	ref_bancarias_nombre_entidad: '',
	ref_bancarias_fecha_relacion: '',
	ref_bancarias_tipo_servicio: '',
	ref_bancarias_tiempo_entidad: 0,
	ref_bancarias_telefono: '',
	ref_bancarias_numero_cuenta: ''
}

export const refPersonales1Values = {
	ref_personales_1_nombres: '',
	ref_personales_1_apellidos: '',
	ref_personales_1_tipo_id: '',
	ref_personales_1_numero_id: '',
	ref_personales_1_nacionalidad: '',
	ref_personales_1_fecha_nacimiento: '',
	ref_personales_1_estado_civil: '',
	ref_personales_1_numero_hijos: 0,
	ref_personales_1_direccion: '',
	ref_personales_1_tiempo_relacion: 0,
	ref_personales_1_email: ''
}

export const refPersonales2Values = {
	ref_personales_2_nombres: '',
	ref_personales_2_apellidos: '',
	ref_personales_2_tipo_id: '',
	ref_personales_2_numero_id: '',
	ref_personales_2_nacionalidad: '',
	ref_personales_2_fecha_nacimiento: '',
	ref_personales_2_estado_civil: '',
	ref_personales_2_numero_hijos: 0,
	ref_personales_2_direccion: '',
	ref_personales_2_tiempo_relacion: 0,
	ref_personales_2_email: ''
}

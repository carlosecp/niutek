import * as Yup from 'yup'

export const createValues = {
	p_cod_sucursal: '',
	create_razon_social_empresa: '',
	p_tipo_doc: '',
	p_num_doc: '',
	p_cod_nac: '',
	create_numero_empleados: 0,
	create_telefono_1: '',
	create_telefono_2: '',
	create_direccion: '',
	create_fecha_constitucion: '',
	create_fecha_personería: ''
}

export const createValuesSchema = {
	p_nombres: Yup.string().max(5, 'Hola Juan').required('Nombres'),
	p_apellidos: Yup.string()
		.max(5, 'Apellidos Length')
		.required('Apellidos'),
	p_num_doc: Yup.string().max(5, 'Hola Juan').required('Nombres'),
	p_tipo_doc: Yup.string().required('id is required'),
	p_cod_nac: Yup.string().required('Nacionalidad'),
	create_numero_empleados: Yup.number().min(1).required('Numero de Empleados'),
	create_telefono_1: Yup.string().min(8).required('Teléfono 1'),
	create_direccion: Yup.string().min(10).required('Dirección'),
	create_fecha_constitucion: Yup.string().min()
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

export const datosEconomicos = {
	create_ingresos_anuales_aproximados: 0,
	create_detalles_actividades: ''
}

export const principalesProveedores = {}

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

export const accionistasMayoritarios = {}

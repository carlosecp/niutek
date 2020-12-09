import * as Yup from 'yup'


export const createValues = {
    create_codigo_cliente: '',
    create_razon_social_empresa: '',
    create_tipo_id: '',
    create_numero_id: '',
    create_nacionalidad: '',
    create_numero_empleados: 0,
    create_telefono_1: '',
    create_telefono_2: '',
    create_direccion: '',
    create_fecha_constitucion: '',
    create_fecha_personería: ''

}

export const createValuesSchema = Yup.object({
	create_nombres: Yup.string().max(5, 'Hola Juan').required('Nombres'),
	create_apellidos: Yup.string()
		.max(5, 'Apellidos Length')
		.required('Apellidos'),
	create_numero_id: Yup.string().max(5, 'Hola Juan').required('Nombres')
})


export const datosEconomicos = {
    create_ingresos_anuales_aproximados: 0,
    create_detalles_actividades: ''
}

export const principalesProveedores = {

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

const accionistasMayoritarios = {
    
}
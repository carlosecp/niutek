import * as Yup from 'yup'

export const persona_juridica = {
	// Persona Juridica
	p_nombre: '',
	p_tipo_doc: 0,
	p_num_doc: '',
	p_cod_nac: 0,
	p_cod_depto: 0,
	p_cod_muni: 0,
	p_num_empleados: 0,
	p_sitio_web: '',
	p_e_mail: '',
	p_telefono1: '',
	p_telefono2: '',
	p_direccion: '',
	p_fecha_constitucion: '',
	p_fecha_personeria: '',
	p_ingreso_anual: 0,
	p_actividad_empresa: '',
}

export const origen_fondos = {
	// Origen Fondos
	p_of_donacion: false,
	p_of_nombre_donante: '',
	p_of_herencia: false,
	p_of_de_quien: '',
	p_of_inversiones: false,
	p_of_tipos_inversiones: '',
	p_of_prestamo: false,
	p_of_inst_financiera: '',
	p_of_venta_de: false,
	p_of_descrip_venta_de: '',
	p_of_ing_giro_emp: false,
	p_of_aporte_socios: false,
	p_of_otros: false,
	p_of_des_otros: '',
}

// Referencias Comerciales
export const referencias_comerciales = []

// Referencias Bancarias
export const referencias_bancarias = []

// Proveedores (ppv)
export const proveedores = []

// Accionistas
export const accionistas = []

export const validationSchema = Yup.object({
	p_cod_empresa: Yup.number('Valor Numérico')
		.integer('Valor Entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_cod_sucursal: Yup.number('Valor Numérico')
		.integer('Valor Entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_nombre: Yup.string().max(50, 'Caracteres Máximos 50').required('Requerido'),
	p_tipo_doc: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_num_doc: Yup.string()
		.max(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_cod_nac: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_cod_depto: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_cod_muni: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_num_empleados: Yup.number('Valor Numérico')
		.integer('Valor Entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_sitio_web: Yup.string()
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_e_mail: Yup.string()
		.email('Corre Electrónico Inválido')
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_telefono1: Yup.string()
		.max(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_telefono2: Yup.string()
		.max(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_direccion: Yup.string()
		.max(100, 'Caracteres Máximos 100')
		.required('Requerido'),
	p_fecha_constitucion: Yup.date().required('Requerido'),
	p_fecha_personeria: Yup.date().required('Requerido'),
	p_ingreso_anual: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_actividad_empresa: Yup.string()
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_of_donacion: Yup.boolean(),
	p_of_nombre_donante: Yup.string().when('p_of_donacion', {
		is: true,
		then: Yup.string().max(50, 'Caracteres Máximos 50').required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_herencia: Yup.boolean(),
	p_of_de_quien: Yup.string().when('p_of_herencia', {
		is: true,
		then: Yup.string().max(50, 'Caracteres Máximos 50').required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_inversiones: Yup.boolean(),
	p_of_tipos_inversiones: Yup.string().when('p_of_inversiones', {
		is: true,
		then: Yup.string().max(50, 'Caracteres Máximos 50').required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_prestamo: Yup.boolean(),
	p_of_inst_financiera: Yup.string().when('p_of_prestamo', {
		is: true,
		then: Yup.string().max(50, 'Caracteres Máximos 50').required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_venta_de: Yup.boolean(),
	p_of_descrip_venta_de: Yup.string().when('p_of_venta_de', {
		is: true,
		then: Yup.string().max(50, 'Caracteres Máximos 50').required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_ing_giro_emp: Yup.boolean(),
	p_of_aporte_socios: Yup.boolean(),
	p_of_otros: Yup.boolean(),
	p_of_des_otros: Yup.string().when('p_of_otros', {
		is: true,
		then: Yup.string().max(50, 'Caracteres Máximos 50').required('Requerido'),
		otherwise: Yup.string(),
	}),
	referencias_comerciales: Yup.array().of(
		Yup.object().shape({
			prc_nombre_entidad: Yup.string()
				.max(50, 'Caracteres Máximos 50')
				.required('Requerido'),
			prc_persona_contacto: Yup.string()
				.max(50, 'Caracteres Máximos 50')
				.required('Requerido'),
			prc_direccion: Yup.string()
				.max(100, 'Caracteres Máximos 100')
				.required('Requerido'),
			prc_annios_con_entidad: Yup.number('Valor Numérico')
				.integer('Valor Entero')
				.min(0, 'Valor Mínimo 0')
				.required('Requerido'),
			prc_telefono: Yup.string()
				.max(30, 'Caracteres Máximos 30')
				.required('Requerido'),
		})
	),
	proveedores: Yup.array().of(
		Yup.object().shape({
			ppv_nombre_proveedor: Yup.string().required('Requerido'),
			ppv_nombre_contacto: Yup.string().required('Requerido'),
			ppv_telefono: Yup.string().required('Requerido'),
		})
	),
	referencias_bancarias: Yup.array().of(
		Yup.object().shape({
			prb_nombre_entidad: Yup.string().required('Requerido'),
			prb_tipo_servicio_recibido: Yup.string().required('Requerido'),
			prb_fecha_inicio_relacion: Yup.string().required('Requerido'),
			prb_annios_con_entidad: Yup.number('Valor Numérico')
				.integer('Valor Entero')
				.min(0, 'Valor Mínimo 0')
				.required('Requerido'),
			prb_telefono: Yup.string().required('Requerido'),
			pct_num_cuenta: Yup.string().required('Requerido'),
			pct_cod_moneda: Yup.number('Valor Numérico')
				.integer('Valor Entero')
				.min(0, 'Valor Mínimo 0')
				.required('Requerido'),

			pct_cod_banco: Yup.number('Valor Numérico')
				.integer('Valor Entero')
				.min(0, 'Valor Mínimo 0')
				.required('Requerido'),
		})
	),
	accionistas: Yup.array().of(
		Yup.object().shape({
			pac_nombre_accionista: Yup.string()
				.max(50, 'Caracteres Máximos 50')
				.required('Requerido'),
			pac_tipo_doc: Yup.string()
				.max(10, 'Caracteres Máximos 10')
				.required('Requerido'),
			pac_num_doc: Yup.string()
				.max(30, 'Caracteres Máximos 30')
				.required('Requerido'),
			pac_porcentaje: Yup.number('Valor Numérico')
				.integer('Valor Entero')
				.min(0, 'Valor Mínimo 0')
				.required('Requerido'),
		})
	),
})

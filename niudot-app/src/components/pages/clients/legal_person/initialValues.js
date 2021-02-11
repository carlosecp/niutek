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
	p_fecha_constitucion: '2021-01-31',
	p_fecha_personeria: '2021-01-31',
	p_ingreso_anual: 3.14,
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
	p_nombre: Yup.string()
		.length(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_tipo_doc: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_num_doc: Yup.string()
		.length(30, 'Caracteres Máximos 30')
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
		.length(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_e_mail: Yup.string()
		.email('Corre Electrónico Inválido')
		.length(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_telefono1: Yup.string()
		.length(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_telefono2: Yup.string()
		.length(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_direccion: Yup.string()
		.length(100, 'Caracteres Máximos 100')
		.required('Requerido'),
	p_fecha_constitucion: Yup.date().required('Requerido'),
	p_fecha_personeria: Yup.date().required('Requerido'),
	p_ingreso_anual: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_actividad_empresa: Yup.string()
		.length(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_of_donacion: Yup.number('Valor Numérico')
		.integer('Valor Entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_of_nombre_donante: Yup.string()
		.length(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_of_herencia: Yup.number('Valor Numérico')
		.integer('Valor Entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_of_de_quien: Yup.string()
		.length(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_of_inversiones: Yup.number('Valor Numérico')
		.integer('Valor Entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_of_tipos_inversiones: Yup.string()
		.length(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_of_prestamo: Yup.number('Valor Numérico')
		.integer('Valor Entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_of_inst_financiera: Yup.string()
		.length(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_of_venta_de: Yup.number('Valor Numérico')
		.integer('Valor Entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_of_descrip_venta_de: Yup.string()
		.length(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_of_ing_giro_emp: Yup.number('Valor Numérico')
		.integer('Valor Entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_of_aporte_socios: Yup.number('Valor Numérico')
		.integer('Valor Entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_of_otros: Yup.number('Valor Numérico')
		.integer('Valor Entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_of_des_otros: Yup.string()
		.length(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	referencias_comerciales: Yup.array().of(
		Yup.object().shape({
			prc_nombre_entidad: Yup.string()
				.length(50, 'Caracteres Máximos 50')
				.required('Requerido'),
			prc_persona_contacto: Yup.string()
				.length(50, 'Caracteres Máximos 50')
				.required('Requerido'),
			prc_direccion: Yup.string()
				.length(100, 'Caracteres Máximos 100')
				.required('Requerido'),
			prc_annios_con_entidad: Yup.number('Valor Numérico')
				.integer('Valor Entero')
				.min(0, 'Valor Mínimo 0')
				.required('Requerido'),
			prc_telefono: Yup.string()
				.length(30, 'Caracteres Máximos 30')
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
				.length(50, 'Caracteres Máximos 50')
				.required('Requerido'),
			pac_tipo_doc: Yup.string()
				.length(10, 'Caracteres Máximos 10')
				.required('Requerido'),
			pac_num_doc: Yup.string()
				.length(30, 'Caracteres Máximos 30')
				.required('Requerido'),
			pac_porcentaje: Yup.number('Valor Numérico')
				.integer('Valor Entero')
				.min(0, 'Valor Mínimo 0')
				.required('Requerido'),
		})
	),
})

import * as Yup from 'yup'

export const persona_juridica = {
	// Persona Juridica
	p_nombre: 'Test Nombre',
	p_tipo_doc: 1,
	p_num_doc: '001-100901-1037U',
	p_cod_nac: 1,
	p_cod_depto: 1,
	p_cod_muni: 1,
	p_num_empleados: 10,
	p_sitio_web: 'test.com',
	p_e_mail: 'test@gmail.com',
	p_telefono1: '1144943633',
	p_telefono2: '1199887766',
	p_direccion: 'Test Direccion',
	p_fecha_constitucion: '10-10-10',
	p_fecha_personeria: '10-12-11',
	p_ingreso_anual: 1,
	p_actividad_empresa: 'Test Actividad Empresa',
}

export const origen_fondos = {
	// Origen Fondos
	p_of_donacion: true,
	p_of_nombre_donante: 'Test Nombre Donante',
	p_of_herencia: false,
	p_of_de_quien: '',
	p_of_inversiones: false,
	p_of_tipos_inversiones: '',
	p_of_prestamo: true,
	p_of_inst_financiera: 'Test Institucion Financiera',
	p_of_venta_de: false,
	p_of_descrip_venta_de: '',
	p_of_ing_giro_emp: false,
	p_of_aporte_socios: false,
	p_of_otros: false,
	p_of_des_otros: '',
}

// Referencias Comerciales
export const referencias_comerciales = [
	{
		prc_nombre_entidad: 'Test Nombre Entidad 1',
		prc_persona_contacto: 'Test Persona Contacto 1',
		prc_direccion: 'Test Direccion 1',
		prc_annios_con_entidad: 10,
		prc_telefono: '1144943633',
	},
	{
		prc_nombre_entidad: 'Test Nombre Entidad 2',
		prc_persona_contacto: 'Test Persona Contacto 2',
		prc_direccion: 'Test Direccion 2',
		prc_annios_con_entidad: 11,
		prc_telefono: '1199887766',
	},
]

// Referencias Bancarias
export const referencias_bancarias = [
	{
		prb_nombre_entidad: 'Test Nombre Entidad 1',
		prb_tipo_servicio_recibido: 'Test Tipo Servicio 1',
		prb_fecha_inicio_relacion: '10-09-01',
		prb_annios_con_entidad: 8,
		prb_telefono: '5566778899',
		pct_num_cuenta: '123456789',
		pct_cod_moneda: 1,
		pct_cod_banco: 1,
	},
	{
		prb_nombre_entidad: 'Test Nombre Entidad 2',
		prb_tipo_servicio_recibido: 'Test Tipo Servicio 2',
		prb_fecha_inicio_relacion: '10-09-14',
		prb_annios_con_entidad: 5,
		prb_telefono: '5566778899',
		pct_num_cuenta: '123456789',
		pct_cod_moneda: 2,
		pct_cod_banco: 2,
	},
]

// Proveedores (ppv)
export const proveedores = [
	{
		ppv_nombre_proveedor: 'Test Nombre Proveedor 1',
		ppv_nombre_contacto: 'Test Nombre Contacto 1',
		ppv_telefono: '1145789056',
	},
	{
		ppv_nombre_proveedor: 'Test Nombre Proveedor 2',
		ppv_nombre_contacto: 'Test Nombre Contacto 2',
		ppv_telefono: '1145789056',
	},
]

// Accionistas
export const accionistas = [
	{
		pac_nombre_accionista: 'Test Nombre Accionista 1',
		pac_tipo_doc: 1,
		pac_num_doc: '45789612',
		pac_porcentaje: 25.57,
	},
	{
		pac_nombre_accionista: 'Test Nombre Accionista 2',
		pac_tipo_doc: 2,
		pac_num_doc: '99789612',
		pac_porcentaje: 45.57,
	},
]

export const validationSchema = Yup.object({
	p_nombre: Yup.string()
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
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
		then: Yup.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_herencia: Yup.boolean(),
	p_of_de_quien: Yup.string().when('p_of_herencia', {
		is: true,
		then: Yup.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_inversiones: Yup.boolean(),
	p_of_tipos_inversiones: Yup.string().when('p_of_inversiones', {
		is: true,
		then: Yup.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_prestamo: Yup.boolean(),
	p_of_inst_financiera: Yup.string().when('p_of_prestamo', {
		is: true,
		then: Yup.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_venta_de: Yup.boolean(),
	p_of_descrip_venta_de: Yup.string().when('p_of_venta_de', {
		is: true,
		then: Yup.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_ing_giro_emp: Yup.boolean(),
	p_of_aporte_socios: Yup.boolean(),
	p_of_otros: Yup.boolean(),
	p_of_des_otros: Yup.string().when('p_of_otros', {
		is: true,
		then: Yup.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
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
				.min(0, 'Valor Mínimo 0')
				.required('Requerido'),
		})
	),
})

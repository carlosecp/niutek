import * as Yup from 'yup'

export const persona_natural = {
	p_nombres: 'Test Nombre 1',
	p_apellidos: 'Test Apellido 1',
	p_sexo: 1,
	p_tipo_doc: 1,
	p_num_doc: '001-100901-1037U',
	p_cod_nac: 1,
	p_cod_depto: 1,
	p_cod_muni: 1,
	p_direccion: 'Test Direccion 1',
	p_notas: 'Test Notas 1',
	p_telefono1: '1144943633',
	p_telefono2: '1231231222',
	p_lugar_nacimiento: 'Managua, Managua',
	p_fecha_nacimiento: '10-09-01',
	p_cargo_publico: 1,
	p_num_hijos: 3,
}

export const datos_profesionales = {
	p_profesion_oficio: 'Test Profesion 1',
	p_ocupacion_puesto: 'Test Ocupacion 1',
	p_nombre_empresa: 'Test Nombre Empresa 1',
	p_actividad_empresa: 'Test Actividad Empresa 1',
	p_tel_empresa: '77889955',
	p_email_empresa: 'xxx@labsolka.com.ni',
	p_ingreso_anual: 9,
}

export const origen_fondos = {
	p_of_negocio_propio: false,
	p_of_nombre_negocio: '',
	p_of_prof_independiente: true,
	p_of_prof_ejerce: 'Test Profesion Ejerce',
	p_of_herencia: false,
	p_of_de_quien: '',
	p_of_inversiones: true,
	p_of_tipos_inversiones: 'Test Tipo Inversiones',
	p_of_prestamo: false,
	p_of_inst_financiera: '',
	p_of_venta_de: false,
	p_of_descrip_venta_de: '',
	p_of_salario: false,
	p_of_ahorro: true,
	p_of_aho_inst_financiera: 'Test Institucion Financiera',
	p_of_otros: false,
	p_of_des_otros: '',
}

export const referencias_comerciales = [
	{
		prc_nombre_entidad: 'Test Nombre Entidad 1',
		prc_persona_contacto: 'Test Persona Contacto 1',
		prc_direccion: 'Test Direccion 1',
		prc_annios_con_entidad: 4,
		prc_telefono: '99225500',
	},
	{
		prc_nombre_entidad: 'Test Nombre Entidad 2',
		prc_persona_contacto: 'Test Persona Contacto 2',
		prc_direccion: 'Test Direccion 2',
		prc_annios_con_entidad: 8,
		prc_telefono: '99225566',
	},
]

export const referencias_bancarias = [
	{
		prb_nombre_entidad: 'Test Nombre Entidad 1',
		prb_tipo_servicio_recibido: 'Test Tipo Servicio 1',
		prb_fecha_inicio_relacion: '09-10-09',
		prb_annios_con_entidad: 4,
		prb_telefono: '1144557788',
		pct_num_cuenta: '123123',
		pct_cod_moneda: 2,
		pct_cod_banco: 2,
	},
	{
		prb_nombre_entidad: 'Test Nombre Entidad 2',
		prb_tipo_servicio_recibido: 'Test Tipo Servicio 2',
		prb_fecha_inicio_relacion: '09-10-07',
		prb_annios_con_entidad: 5,
		prb_telefono: '1144557788',
		pct_num_cuenta: '123123',
		pct_cod_moneda: 1,
		pct_cod_banco: 3,
	},
]

export const referencias_personales = [
	{
		prp_nombre: 'Test Nombre Referencia 1',
		prp_tipo_doc: 2,
		prp_num_doc: '001-100901-1037U',
		prp_telefono1: '12312323',
		prp_telefono2: '78978923',
		prp_direccion: 'Test Direccion 1',
		prp_lugar_trabajo: 'Test Lugar Trabajo 1',
		prp_telefono_trabajo: '12312312',
		prp_tiempo_conocer: 4,
		prp_e_mail: 'test1@gmail.com',
	},
	{
		prp_nombre: 'Test Nombre Referencia 2',
		prp_tipo_doc: 4,
		prp_num_doc: '001-100901-1037U',
		prp_telefono1: '12390913',
		prp_telefono2: '00999000',
		prp_direccion: 'Test Direccion 2',
		prp_lugar_trabajo: 'Test Lugar Trabajo 2',
		prp_telefono_trabajo: '12312312',
		prp_tiempo_conocer: 2,
		prp_e_mail: 'test2@gmail.com',
	},
]

export const validationSchema = Yup.object({
	p_nombres: Yup.string()
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_apellidos: Yup.string()
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_sexo: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
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
	p_direccion: Yup.string()
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_notas: Yup.string()
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_telefono1: Yup.string()
		.max(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_telefono2: Yup.string()
		.max(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_lugar_nacimiento: Yup.string()
		.max(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_fecha_nacimiento: Yup.date().required('Requerido'),
	p_cargo_publico: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_num_hijos: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_profesion_oficio: Yup.string()
		.max(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_ocupacion_puesto: Yup.string()
		.max(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_nombre_empresa: Yup.string()
		.max(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_actividad_empresa: Yup.string()
		.max(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_tel_empresa: Yup.string()
		.max(30, 'Caracteres Máximos 30')
		.required('Requerido'),
	p_email_empresa: Yup.string()
		.email('Corre Electrónico Inválido')
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_ingreso_anual: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_of_negocio_propio: Yup.boolean(),
	p_of_nombre_negocio: Yup.string().when('p_of_negocio_propio', {
		is: true,
		then: Yup.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_prof_independiente: Yup.boolean(),
	p_of_prof_ejerce: Yup.string().when('p_of_prof_independiente', {
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
	p_of_salario: Yup.boolean(),
	p_of_ahorro: Yup.string().when('p_of_salario', {
		is: true,
		then: Yup.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_aho_inst_financiera: Yup.string().when('p_of_salario', {
		is: true,
		then: Yup.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		otherwise: Yup.string(),
	}),
	p_of_otros: Yup.boolean(),
	p_of_des_otros: Yup.string().when('p_of_otros', {
		is: true,
		then: Yup.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		otherwise: Yup.string(),
	}),
})

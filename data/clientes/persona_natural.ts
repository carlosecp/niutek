import * as yup from 'yup'
import moment from 'moment'

const persona_natural = {
	p_nombres: {
		value: 'Nombre Prueba 1',
		validation: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
	},
	p_apellidos: {
		value: 'Apellido Prueba 1',
		validation: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
	},
	p_sexo: {
		value: 1,
		validation: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
	},
	p_tipo_doc: {
		value: 1,
		validation: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
	},
	p_num_doc: {
		value: 'No. Documento Prueba',
		validation: yup
			.string()
			.required('Requerido')
			.max(30, 'Caracteres máximos 30'),
	},
	p_cod_nac: {
		value: 1,
		validation: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
	},
	p_cod_depto: {
		value: 1,
		validation: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
	},
	p_cod_muni: {
		value: 1,
		validation: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
	},
	p_direccion: {
		value: 'Direccion Prueba',
		validation: yup
			.string()
			.required('Requerido')
			.max(100, 'Caracteres máximos 100'),
	},
	p_notas: {
		value: 'Prueba Notas',
		validation: yup
			.string()
			.required('Requerido')
			.max(300, 'Caracteres máximos 300'),
	},
	p_telefono1: {
		value: 'Prueba Telefono 1',
		validation: yup
			.string()
			.required('Requerido')
			.max(30, 'Caracteres máximos 30'),
	},
	p_telefono2: {
		value: 'Prueba Telefono 2',
		validation: yup
			.string()
			.required('Requerido')
			.max(30, 'Caracteres máximos 30'),
	},
	p_lugar_nacimiento: {
		value: 'Lugar Nacimiento Prueba',
		validation: yup
			.string()
			.required('Requerido')
			.max(30, 'Caracteres máximos 30'),
	},
	p_fecha_nacimiento: {
		value: moment().format('DD-MM-YY'),
		validation: yup
			.date()
			.required('Requerido')
			.max(moment(), 'Fecha inválida'),
	},
	p_cargo_publico: {
		value: 1,
		validation: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
	},
	p_num_hijos: {
		value: 1,
		validation: yup
			.number()
			.integer('Valor entero')
			.min(0, 'Valor Mínimo 0')
			.required('Requerido'),
	},
}

const datos_profesionales = {
	p_profesion_oficio: {
		value: 'Profesion Prueba',
		validation: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
	},
	p_ocupacion_puesto: {
		value: 'Puesto Prueba',
		validation: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
	},
	p_nombre_empresa: {
		value: 'Nombre Empresa Prueba',
		validation: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
	},
	p_actividad_empresa: {
		value: 'Profesion Prueba',
		validation: yup
			.string()
			.required('Requerido')
			.max(50, 'Caracteres máximos 50'),
	},
	p_tel_empresa: {
		value: 'Telefono Empresa Prueba',
		validation: yup
			.string()
			.required('Requerido')
			.max(30, 'Caracteres máximos 30'),
	},
	p_email_empresa: {
		value: 'corre@electronico.com',
		validation: yup
			.string()
			.email('Corre Electrónico Inválido')
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
	},
	p_ingreso_anual: {
		value: (69).toFixed(2),
		validation: yup.number().min(0, 'Valor Mínimo 0').required('Requerido'),
	},
}

const origen_fondos = {
	p_of_negocio_propio: {
		value: true,
		validation: yup.boolean(),
	},
	p_of_nombre_negocio: {
		value: 'Nombre Negocio Propio Prueba',
		validation: yup.string().when('p_of_negocio_propio', {
			is: true,
			then: yup
				.string()
				.required('Requerido')
				.max(50, 'Caracteres máximos 50'),
			otherwise: yup.string().max(0, 'Valor inválido'),
		}),
	},
	p_of_prof_independiente: {
		value: true,
		validation: yup.boolean(),
	},
	p_of_prof_ejerce: {
		value: 'Profesion Ejerce Prueba',
		validation: yup.string().when('p_of_prof_independiente', {
			is: true,
			then: yup
				.string()
				.required('Requerido')
				.max(50, 'Caracteres máximos 50'),
			otherwise: yup.string().max(0, 'Valor inválido'),
		}),
	},
	p_of_herencia: {
		value: true,
		validation: yup.boolean(),
	},
	p_of_de_quien: {
		value: 'Herencia de quien Prueba',
		validation: yup.string().when('p_of_prof_independiente', {
			is: true,
			then: yup
				.string()
				.required('Requerido')
				.max(50, 'Caracteres máximos 50'),
			otherwise: yup.string().max(0, 'Valor inválido'),
		}),
	},
	p_of_inversiones: {
		value: true,
		validation: yup.boolean(),
	},
	p_of_tipos_inversiones: {
		value: 'Tipo Inversiones Prueba',
		validation: yup.string().when('p_of_inversiones', {
			is: true,
			then: yup
				.string()
				.required('Requerido')
				.max(50, 'Caracteres máximos 50'),
			otherwise: yup.string().max(0, 'Valor inválido'),
		}),
	},
	p_of_prestamo: {
		value: true,
		validation: yup.boolean(),
	},
	p_of_inst_financiera: {
		value: 'Institucion Financiera Prueba',
		validation: yup.string().when('p_of_prestamo', {
			is: true,
			then: yup
				.string()
				.required('Requerido')
				.max(50, 'Caracteres máximos 50'),
			otherwise: yup.string().max(0, 'Valor inválido'),
		}),
	},
	p_of_venta_de: {
		value: true,
		validation: yup.boolean(),
	},
	p_of_descrip_venta_de: {
		value: 'Descripcion de Venta Prueba',
		validation: yup.string().when('p_of_venta_de', {
			is: true,
			then: yup
				.string()
				.required('Requerido')
				.max(50, 'Caracteres máximos 50'),
			otherwise: yup.string().max(0, 'Valor inválido'),
		}),
	},
	p_of_salario: {
		value: true,
		validation: yup.boolean(),
	},
	p_of_ahorro: {
		value: true,
		validation: yup.boolean(),
	},
	p_of_aho_inst_financiera: {
		value: 'Institucion de ahorro financiera Prueba',
		validation: yup.string().when('p_of_ahorro', {
			is: true,
			then: yup
				.string()
				.required('Requerido')
				.max(50, 'Caracteres máximos 50'),
			otherwise: yup.string().max(0, 'Valor inválido'),
		}),
	},
	p_of_otros: {
		value: true,
		validation: yup.boolean(),
	},
	p_of_des_otros: {
		value: 'Descripcion Otros',
		validation: yup.string().when('p_of_otros', {
			is: true,
			then: yup
				.string()
				.required('Requerido')
				.max(50, 'Caracteres máximos 50'),
			otherwise: yup.string().max(0, 'Valor inválido'),
		}),
	},
}

const referencias_comerciales = [
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

const referencias_bancarias = [
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

const referencias_personales = [
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

const schemas = {
	...persona_natural,
	...datos_profesionales,
	...origen_fondos,
}

const initialValues = {}
const validations = {}

for (const [key, schema] of Object.entries(schemas)) {
	initialValues[key] = schema.value
	validations[key] = schema.validation
}

const validationSchema = yup.object({ ...validations })

export { initialValues, validationSchema }

export type valuesPersonaNatural = typeof initialValues
export type validationsPersonaNatural = yup.Asserts<typeof validationSchema>

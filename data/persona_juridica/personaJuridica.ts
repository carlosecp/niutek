import * as yup from 'yup'
import moment from 'moment'

const values = {
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
	p_fecha_constitucion: moment().format('YYYY-MM-DD'),
	p_fecha_personeria: moment().format('YYYY-MM-DD'),
	p_ingreso_anual: (0).toFixed(2),
	p_actividad_empresa: ''
}

const testingValues = {
	p_nombre: 'p_nombre',
	p_tipo_doc: 0,
	p_num_doc: 'p_num_doc',
	p_cod_nac: 0,
	p_cod_depto: 0,
	p_cod_muni: 0,
	p_num_empleados: 0,
	p_sitio_web: 'p_sition_web',
	p_e_mail: 'p_e_mail@test.com',
	p_telefono1: 'p_telefono1',
	p_telefono2: 'p_telefono2',
	p_direccion: 'p_direccion',
	p_fecha_constitucion: moment().format('YYYY-MM-DD'),
	p_fecha_personeria: moment().format('YYYY-MM-DD'),
	p_ingreso_anual: (0).toFixed(2),
	p_actividad_empresa: 'p_actividad_empresa'
}

const validations = {
	p_nombre: yup.string().required('Requerido').max(50, 'Caracteres máximos 50'),
	p_tipo_doc: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_num_doc: yup
		.string()
		.required('Requerido')
		.max(30, 'Caracteres máximos 30'),
	p_cod_nac: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_cod_depto: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_cod_muni: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_num_empleados: yup
		.number()
		.integer('Valor entero')
		.min(0, 'Valor mínimo 0')
		.required('Requerido'),
	p_sitio_web: yup
		.string()
		.required('Requerido')
		.max(50, 'Caracteres máximos 50'),
	p_e_mail: yup
		.string()
		.email('Corre Electrónico Inválido')
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_telefono1: yup
		.string()
		.required('Requerido')
		.max(30, 'Caracteres máximos 30'),
	p_telefono2: yup
		.string()
		.required('Requerido')
		.max(30, 'Caracteres máximos 30'),
	p_direccion: yup
		.string()
		.required('Requerido')
		.max(100, 'Caracteres máximos 100'),
	p_fecha_constitucion: yup
		.date()
		.required('Requerido')
		.max(moment(), 'Fecha inválida')
		.typeError('Fecha Inválida (formato YYYY-MM-DD)'),
	p_fecha_personeria: yup
		.date()
		.required('Requerido')
		.max(moment(), 'Fecha inválida')
		.typeError('Fecha Inválida (formato YYYY-MM-DD)'),
	p_ingreso_anual: yup
		.number()
		.integer('Valor entero')
		.min(0, 'Valor mínimo 0')
		.required('Requerido'),
	p_actividad_empresa: yup
		.string()
		.required('Requerido')
		.max(500, 'Caracteres máximos 500')
}

// export const personaJuridica = { values, validations }
export const personaJuridica = { values: testingValues, validations }

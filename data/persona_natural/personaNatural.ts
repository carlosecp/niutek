import * as yup from 'yup'
import moment from 'moment'

const values = {
	p_nombres: '',
	p_apellidos: '',
	p_sexo: 0,
	p_tipo_doc: 0,
	p_num_doc: '',
	p_cod_nac: 0,
	p_cod_depto: 0,
	p_cod_muni: 0,
	p_direccion: '',
	p_notas: '',
	p_telefono1: '',
	p_telefono2: '',
	p_lugar_nacimiento: '',
	p_fecha_nacimiento: moment().format('YYYY-MM-DD'),
	p_cargo_publico: 0,
	p_num_hijos: 0
}

const testingValues = {
	p_nombres: 'p_nombre',
	p_apellidos: 'p_apellidos',
	p_sexo: 1,
	p_tipo_doc: 1,
	p_num_doc: 'p_num_doc',
	p_cod_nac: 1,
	p_cod_depto: 1,
	p_cod_muni: 1,
	p_direccion: 'p_direccion',
	p_notas: 'p_notas',
	p_telefono1: 'p_telefono1',
	p_telefono2: 'p_telefono2',
	p_lugar_nacimiento: 'p_lugar_nacimiento',
	p_fecha_nacimiento: moment().format('YYYY-MM-DD'),
	p_cargo_publico: 1,
	p_num_hijos: 1
}

const validations = {
	p_nombres: yup
		.string()
		.required('Requerido')
		.max(50, 'Caracteres máximos 50'),
	p_apellidos: yup
		.string()
		.required('Requerido')
		.max(50, 'Caracteres máximos 50'),
	p_sexo: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
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
	p_direccion: yup
		.string()
		.required('Requerido')
		.max(100, 'Caracteres máximos 100'),

	p_notas: yup
		.string()
		.required('Requerido')
		.max(300, 'Caracteres máximos 300'),
	p_telefono1: yup
		.string()
		.required('Requerido')
		.max(30, 'Caracteres máximos 30'),
	p_telefono2: yup
		.string()
		.required('Requerido')
		.max(30, 'Caracteres máximos 30'),
	p_lugar_nacimiento: yup
		.string()
		.required('Requerido')
		.max(30, 'Caracteres máximos 30'),
	p_fecha_nacimiento: yup
		.date()
		.required('Requerido')
		.max(moment(), 'Fecha inválida')
		.typeError('Fecha Inválida (formato YYYY-MM-DD)'),
	p_cargo_publico: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_num_hijos: yup
		.number()
		.integer('Valor entero')
		.min(0, 'Valor mínimo 0')
		.required('Requerido')
}

// export const personaNatural = { values, validations }
export const personaNatural = { values: testingValues, validations }

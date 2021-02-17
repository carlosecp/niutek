import * as yup from 'yup'
import moment from 'moment'

const values = {
	p_nombres: 'Nombre Prueba 1',
	p_apellidos: 'Apellido Prueba 1',
	p_sexo: 1,
	p_tipo_doc: 1,
	p_num_doc: 'No. Documento Prueba',
	p_cod_nac: 1,
	p_cod_depto: 1,
	p_cod_muni: 1,
	p_direccion: 'Direccion Prueba',
	p_notas: 'Prueba Notas',
	p_telefono1: 'Prueba Telefono 1',
	p_telefono2: 'Prueba Telefono 2',
	p_lugar_nacimiento: 'Lugar Nacimiento Prueba',
	p_fecha_nacimiento: moment().format('YYYY-MM-DD'),
	p_cargo_publico: 1,
	p_num_hijos: 1,
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
		.max(moment(), 'Fecha inválida'),
	p_cargo_publico: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_num_hijos: yup
		.number()
		.integer('Valor entero')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
}

export default { values, validations }

import * as yup from 'yup'
import moment from 'moment'

const values = {
	p_cod_tipo_credito: 0,
	p_cod_fuente_fondo: 0,
	p_nombre: '',
	p_descripcion: '',
	p_cod_moneda: 0,
	p_tasa_interes_minima: 0,
	p_tasa_interes_maxima: 0,
	p_monto_minimo: 0,
	p_monto_maximo: 0,
	p_plazo_minimo: 0,
	p_plazo_maximo: 0,
	p_cod_frec_plazo_minimo: 0,
	p_cod_frec_plazo_maximo: 0,
	p_cod_frecuencia_pago: 0,
	p_porc_aportacion: 0,
	p_cod_tipo_cuota: 0,
	p_cod_aplica_grupo: 0,
	pcr_cod_moneda: '',
	pcr_cod_tipo: '',
	pcr_cod_cargo: '',
	pcr_valor: ''
}
/*
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
		.min(0, 'Valor Mínimo 0')
		.required('Requerido')
}
*/
const validations = {}
export const productos = { values, validations }
import * as yup from 'yup'
import moment from 'moment'

const values = {
	p_cod_promotor: 0,
	p_fecha_solicitud: moment().format('YYYY-MM-DD'),
	p_cod_act_economica: 0,
	p_monto_solicitado: 0,
	p_cod_sec_economico: 0,
	p_cod_moneda: 0,
	p_cod_destino_credito: 0,
	p_tasa_interes: 0,
	p_plazo: 0,
	p_cod_frec_plazo: 0,
	p_cod_frecuencia_pago: 0,
	pdc_cod_documento: [],
	pga_cod_garantia: []
}

const testingValues = [
	{
		p_cod_promotor: 0,
		p_fecha_solicitud: moment().format('YYYY-MM-DD'),
		p_cod_act_economica: 0,
		p_monto_solicitado: 0,
		p_cod_sec_economico: 0,
		p_cod_moneda: 0,
		p_cod_destino_credito: 0,
		p_tasa_interes: 0,
		p_plazo: 0,
		p_cod_frec_plazo: 0,
		p_cod_frecuencia_pago: 0,
		pdc_cod_documento: ['2', '1'],
		pga_cod_garantia: ['2', '1']
	}
]

const validations = {}

// const validations = {
// 	p_nombres: yup
// 		.string()
// 		.required('Requerido')
// 		.max(50, 'Caracteres máximos 50'),
// 	p_apellidos: yup
// 		.string()
// 		.required('Requerido')
// 		.max(50, 'Caracteres máximos 50'),
// 	p_sexo: yup
// 		.mixed()
// 		.notOneOf([0], 'Seleccione un valor')
// 		.required('Requerido'),
// 	p_tipo_doc: yup
// 		.mixed()
// 		.notOneOf([0], 'Seleccione un valor')
// 		.required('Requerido'),
// 	p_num_doc: yup
// 		.string()
// 		.required('Requerido')
// 		.max(30, 'Caracteres máximos 30'),
// 	p_cod_nac: yup
// 		.mixed()
// 		.notOneOf([0], 'Seleccione un valor')
// 		.required('Requerido'),
// 	p_cod_depto: yup
// 		.mixed()
// 		.notOneOf([0], 'Seleccione un valor')
// 		.required('Requerido'),
// 	p_cod_muni: yup
// 		.mixed()
// 		.notOneOf([0], 'Seleccione un valor')
// 		.required('Requerido'),
// 	p_direccion: yup
// 		.string()
// 		.required('Requerido')
// 		.max(100, 'Caracteres máximos 100'),

// 	p_notas: yup
// 		.string()
// 		.required('Requerido')
// 		.max(300, 'Caracteres máximos 300'),
// 	p_telefono1: yup
// 		.string()
// 		.required('Requerido')
// 		.max(30, 'Caracteres máximos 30'),
// 	p_telefono2: yup
// 		.string()
// 		.required('Requerido')
// 		.max(30, 'Caracteres máximos 30'),
// 	p_lugar_nacimiento: yup
// 		.string()
// 		.required('Requerido')
// 		.max(30, 'Caracteres máximos 30'),
// 	p_fecha_nacimiento: yup
// 		.date()
// 		.required('Requerido')
// 		.max(moment(), 'Fecha inválida')
// 		.typeError('Fecha Inválida (formato YYYY-MM-DD)'),
// 	p_cargo_publico: yup
// 		.mixed()
// 		.notOneOf([0], 'Seleccione un valor')
// 		.required('Requerido'),
// 	p_num_hijos: yup
// 		.number()
// 		.integer('Valor entero')
// 		.min(0, 'Valor mínimo 0')
// 		.required('Requerido')
// }

// export const solicitud = { values, validations }
export const solicitud = { values: testingValues, validations }

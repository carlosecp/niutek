import * as yup from 'yup'
import moment from 'moment'

const values = {
	p_nombre: '',
	p_descripcion: 0,
	p_cod_moneda: 0,
	p_tasa_interes: 0,
	p_monto_minimo: 0,
	p_monto_maximo: 0,
	p_plazo_meses: 0,
	p_capitaliza_meses: 0,
	pdc_cod_documento: []
}

const validations = {
	p_nombre: yup.string().required('Requerido').max(30, 'Caracteres máximos 30'),
	p_descripcion: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_cod_moneda: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_tasa_interes: yup.number().min(0, 'Valor mínimo 0').required('Requerido'),
	p_monto_minimo: yup.number().min(0, 'Valor mínimo 0').required('Requerido'),
	p_monto_maximo: yup.number().min(0, 'Valor mínimo 0').required('Requerido'),
	p_plazo_meses: yup
		.number()
		.integer('Valor entero')
		.min(0, 'Valor mínimo 0')
		.required('Requerido'),
	p_capitaliza_meses: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	pdc_cod_documento: yup.array().of(yup.number())
}

export const certificados = { values, validations }

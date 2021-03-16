import * as yup from 'yup'

const values = {
	p_nombre: '',
	p_descripcion: '',
	p_cod_moneda: 0,
	p_tasa_interes: 0,
	p_monto_minimo_apertura: 0,
	p_monto_promedio_mensual: 0,
	p_max_retiros_mes: 0,
	p_monto_max_por_retiro: 0,
	pdc_cod_documento: []
}

const validations = {
	p_nombre: yup.string().required('Requerido').max(50, 'Caracteres máximos 50'),
	p_descripcion: yup
		.string()
		.required('Requerido')
		.max(100, 'Caracteres máximos 100'),
	p_cod_moneda: yup
		.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_tasa_interes: yup.number().min(0, 'Valor mínimo 0').required('Requerido'),
	p_monto_minimo_apertura: yup
		.number()
		.min(0, 'Valor mínimo 0')
		.required('Requerido'),
	p_monto_promedio_mensual: yup
		.number()
		.min(0, 'Valor mínimo 0')
		.required('Requerido'),
	p_max_retiros_mes: yup
		.number()
		.integer('Valor entero')
		.min(0, 'Valor mínimo 0')
		.required('Requerido'),
	p_monto_max_por_retiro: yup
		.number()
		.min(0, 'Valor mínimo 0')
		.required('Requerido'),
	pdc_cod_documento: yup.array().of(yup.number())
}

export const productos = { values, validations }

import * as yup from 'yup'

const values = {
	p_nombre: '',
	p_descripcion: '',
	p_cod_moneda: 0,
	p_tasa_interes: (0).toFixed(2),
	p_monto_minimo: (0).toFixed(2),
	p_monto_maximo: (0).toFixed(2),
	p_plazo_meses: 0,
	p_capitaliza_meses: 0,
	pdc_cod_documento: []
}

const testingValues = {
	p_nombre: 'p_nombre',
	p_descripcion: 'p_descripcion',
	p_cod_moneda: 0,
	p_tasa_interes: (0).toFixed(2),
	p_monto_minimo: (0).toFixed(2),
	p_monto_maximo: (0).toFixed(2),
	p_plazo_meses: 0,
	p_capitaliza_meses: 0,
	pdc_cod_documento: ['2', '1']
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
		.number()
		.integer('Valor entero')
		.min(0, 'Valor mínimo 0')
		.required('Requerido'),
	pdc_cod_documento: yup.array().of(yup.number())
}

// export const certificados = { values, validations }
export const certificados = { values: testingValues, validations }

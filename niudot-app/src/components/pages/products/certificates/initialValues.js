import * as Yup from 'yup'

export const initialValues = {
	p_nombre: '',
	p_descripcion: '',
	p_cod_moneda: 0,
	p_tasa_interes: 0,
	p_monto_minimo: 0,
	p_monto_maximo: 0,
	p_plazo_meses: 0,
	p_capitaliza_meses: 0,
	p_cod_documento: [],
}

export const validationSchema = Yup.object({
	p_nombre: Yup.string()
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_descripcion: Yup.string()
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_cod_moneda: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('Requerido'),
	p_tasa_interes: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_monto_minimo: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_monto_maximo: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_plazo_meses: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_capitaliza_meses: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	pdc_cod_documento: Yup.array().of(Yup.string()),
})

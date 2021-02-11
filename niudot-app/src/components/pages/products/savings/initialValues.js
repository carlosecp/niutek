import * as Yup from 'yup'

export const initialValues = {
	p_nombre: '',
	p_descripcion: '',
	p_cod_moneda: 0,
	p_tasa_interes: 0,
	p_monto_minimo_apertura: 0,
	p_monto_promedio_mensual: 0,
	p_max_retiros_mes: 0,
	p_monto_max_por_retiro: 0,
	pdc_cod_documento: [],
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
	p_monto_minimo_apertura: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_monto_max_por_retiro: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_max_retiros_mes: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	pdc_cod_documento: Yup.array().of(Yup.string()),
})

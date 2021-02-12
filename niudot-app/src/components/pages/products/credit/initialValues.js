import * as Yup from 'yup'

export const credit = {
	p_cod_tipo_credito: 0,
	p_cod_fuente_fondo: 0,
	p_nombre: '',
	p_descripcion: '',
	p_cod_moneda: 0,
	p_tasa_interes: 0,
	p_monto_promedio: 0,
	p_monto_minimo: 0,
	p_monto_maximo: 0,
	p_plazo: 0,
	p_cod_frecuencia_pago: 0,
	p_porc_aportacion: 0,
	p_aplica_grupo_solidario: false,
	p_aplica_individual: false,
	pdc_cod_documento: [],
}

export const cargos = []

export const validationSchema = Yup.object({
	p_cod_tipo_credito: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('requerido'),
	p_cod_fuente_fondo: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('requerido'),
	p_nombre: Yup.string()
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_descripcion: Yup.string()
		.max(50, 'Caracteres Máximos 50')
		.required('Requerido'),
	p_cod_moneda: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('requerido'),
	p_tasa_interes: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_monto_promedio: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_monto_minimo: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_monto_maximo: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_plazo: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('requerido'),
	p_cod_frecuencia_pago: Yup.mixed()
		.notOneOf([0], 'Seleccione un valor')
		.required('requerido'),
	p_porc_aportacion: Yup.number('Valor Numérico')
		.min(0, 'Valor Mínimo 0')
		.required('Requerido'),
	p_aplica_grupo_solidario: Yup.boolean(),
	p_aplica_individual: Yup.boolean(),
	pdc_cod_documento: Yup.array().of(Yup.string()),
	cargos: Yup.array().of(
		Yup.object().shape({
			pcr_descripcion_cargo: Yup.string()
				.max(50, 'Caracteres Máximos 50')
				.required('Requerido'),
			pcr_cod_moneda: Yup.mixed()
				.notOneOf([0], 'Seleccione un valor')
				.required('requerido'),
			pcr_valor: Yup.number('Valor Numérico')
				.min(0, 'Valor Mínimo 0')
				.required('Requerido'),
			pcr_cod_tipo: Yup.mixed()
				.notOneOf([0], 'Seleccione un valor')
				.required('requerido'),
		})
	),
})

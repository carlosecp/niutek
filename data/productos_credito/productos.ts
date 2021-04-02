import * as yup from 'yup'

const values = {
	p_cod_tipo_credito: 0,
	p_cod_fuente_fondo: 0,
	p_nombre: '',
	p_descripcion: '',
	p_cod_moneda: 0,
	p_tasa_interes_minima: (0).toFixed(2),
	p_tasa_interes_maxima: (0).toFixed(2),
	p_monto_minimo: (0).toFixed(2),
	p_monto_maximo: (0).toFixed(2),
	p_plazo_minimo: 0,
	p_plazo_maximo: 0,
	p_cod_frec_plazo_minimo: 0,
	p_cod_frec_plazo_maximo: 0,
	p_cod_frecuencia_pago: 0,
	p_porc_aportacion: 0,
	p_cod_tipo_cuota: 0,
	p_cod_aplica_grupo: 0,
	pdc_cod_documento: [],
	pga_cod_garantia: []
}

const testingValues = {
	p_cod_tipo_credito: 0,
	p_cod_fuente_fondo: 0,
	p_nombre: 'p_nombre',
	p_descripcion: 'p_descripcion',
	p_cod_moneda: 0,
	p_tasa_interes_minima: (0).toFixed(2),
	p_tasa_interes_maxima: (0).toFixed(2),
	p_monto_minimo: (0).toFixed(2),
	p_monto_maximo: (0).toFixed(2),
	p_plazo_minimo: 0,
	p_plazo_maximo: 0,
	p_cod_frec_plazo_min: 0,
	p_cod_frec_plazo_max: 0,
	p_cod_frecuencia_pago: 0,
	p_porc_aportacion: 0,
	p_cod_tipo_cuota: 0,
	p_cod_aplica_grupo: 0,
	pdc_cod_documento: ['2', '1'],
	pga_cod_garantia: ['2', '1']
}

const validations = {}

// export const productos = { values, validations }
export const productos = { values: testingValues, validations }

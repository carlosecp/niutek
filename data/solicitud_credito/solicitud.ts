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

const testingValues = {
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

const validations = {}

// export const solicitud = { values, validations }
export const solicitud = { values: testingValues, validations }

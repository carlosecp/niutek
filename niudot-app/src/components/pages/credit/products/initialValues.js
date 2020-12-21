import * as Yup from 'yup'

export const createValues = {
	create_tipo_de_credito: '',
	create_fuente_de_fondos: '',
	create_nombre_del_producto: '',
	create_descripcion: '',
	create_aplica_a_grupo_solidario: '',
	create_aplica_individual: '',
	create_moneda: '',
	create_tasa_de_interes_mensual: 0,
	create_monto_minimo: 0,
	create_monto_maximo: 0,
	create_plazo_en_meses: 0,
	create_frecuencia_de_pago: 0,
	create_porcentaje_aportación: 0,
	create_documentos_requeridos: ''
}
export const createValuesSchema = {
	create_tipo_de_credito: Yup.string().min(1).required('Tipo de Crédito')
}

import * as Yup from 'yup'

export const createValues = {
	create_nombre_del_cliente: '',
	create_tipo_crédito: '',
	create_nombre_del_producto: '',
	create_numero_de_identificacion: '',
	p_tipo_doc: '',
	create_fecha_de_abono: '',
	create_monto_vencido: 0,
	create_monto_corriente: 0,
	create_abono_extraordinario: 0,
	create_total_a_pagar: 0,
	create_moneda: '',
	create_efectivo: 0,
	create_numero_cheque: '',
	create_nombre_del_banco: '',
	create_tarjeta: ''
}
export const createValuesSchema = {
	create_nombre_del_cliente: Yup.string().min(1).required('Nombres')
}

import * as Yup from 'yup'

export const createValues = {
	create_nombre_del_cliente: '',
	create_nombre_del_producto: '',
	create_numero_de_identificacion: '',
	p_tipo_doc: '',
	create_fecha_de_abono: '',
	create_monto_vencido: 0,
	create_monto_corriente: 0,
	create_abono_extraordinario: '',
	create_total_a_pagar: 0,
	create_moneda: '',
	create_efectivo: 0,
	create_numero_cheque: '',
	create_nombre_del_banco: '',
	create_tarjeta: '',
	create_nombre_del_banco1: ''
}
export const createValuesSchema = {
	create_nombre_del_cliente: Yup.string().min(1).required('Nombres')
}

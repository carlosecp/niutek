import * as Yup from 'yup'

export const createValues = {
	create_nombre_del_cliente: '',
	create_producto_de_ahorro: '',
	create_numero_de_cuenta_de_ahorro: '',
	create_numero_de_identificacion: '',
	p_tipo_doc: '',
	create_moneda: '',
	create_fecha_de_entrega: '',
	create_monto_a_apertura: 0,
	create_efectivo: 0,
	create_numero_cheque: '',
	create_nombre_del_banco: '',
	create_tarjeta: '',
	create_nombre_del_banco1: ''
}
export const createValuesSchema = {
	create_nombre_del_cliente: Yup.string().min(1).required('Nombres')
}

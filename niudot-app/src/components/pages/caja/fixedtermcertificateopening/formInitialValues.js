import * as Yup from 'yup'

export const createValues = {
	create_nombre_del_cliente: '',
	create_producto_de_certificado: '',
	create_numero_de_cuenta: '',
	create_numero_de_identificacion: '',
	create_tipo_id: '',
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

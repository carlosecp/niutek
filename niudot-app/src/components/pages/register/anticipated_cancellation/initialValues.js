import * as Yup from 'yup'

export const createValues = {
	create_nombre_del_cliente: '',
	create_tipo_de_credito: '',
	create_nombre_del_producto: '',
	create_numero_de_identificacion: '',
	create_tipo_id: '',
	create_moneda: '',
	create_fecha_de_entrega: '',
	create_tipo_de_entrega: '',
	create_numero_de_cheque: '',
	create_nombre_del_banco: ''
}

export const createValuesSchema = {
	create_nombre_del_cliente: Yup.string().min(1).required('Nombres')
}

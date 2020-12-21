import * as Yup from 'yup'

export const createValues = {
	create_fecha_de_entrega: '',
	create_numero_de_cheque: '',
	create_moneda: '',
	create_paguese_orden: '',
	create_cantidad_de: 0,
	create_cantidad_en_letras: '',
	create_por_concepto_de: '',
	create_cuenta_bancaria: ''
}
export const createValuesSchema = {
	create_nombre_del_cliente: Yup.string().min(1).required('Nombres')
}

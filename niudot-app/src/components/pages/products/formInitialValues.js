import * as Yup from 'yup'

export const createSavingAccountsSchema = Yup.object({
	nombre_del_producto_savingaccounts: Yup.string()
		.min(1)
		.required('Nombre del Producto'),
	descripcion_de_producto_savingaccounts: Yup.string()
		.min(1)
		.required('Descripción de Producto'),
	tasa_de_interes_savingaccounts: Yup.number()
		.min(0)
		.required('Tasa de Interés')
		.typeError('You must specify a number'),
	monto_minimo_apertura_savingaccounts: Yup.string()
		.min(1)
		.required('Monto Mínimo Apertura'),
	monto_maximo_retiros_savingaccounts: Yup.string()
		.min(1)
		.required('Monto Máximo Retiros'),
	monto_promedio_mensual_savingaccounts: Yup.string()
		.min(1)
		.required('Monto Promedio Mensual'),
	monto_retiros_mensuales_savingaccounts: Yup.string()
		.min(1)
		.required('Monto Retiros Mensuales')
})

export const savingAccounts = {
	nombre_del_producto_savingaccounts: '',
	descripcion_de_producto_savingaccounts: '',
	documentos_requeridos_savingaccounts: '',
	moneda_savingaccounts: '',
	tasa_de_interes_savingaccounts: '',
	plazo_savingaccounts: '',
	monto_minimo_apertura_savingaccounts: '',
	monto_maximo_retiros_savingaccounts: '',
	monto_promedio_mensual_savingaccounts: '',
	monto_retiros_mensuales_savingaccounts: ''
}

export const timeDeposits = {
	nombre_del_producto_timedeposits: '',
	descripcion_de_producto_timedeposits: '',
	documentos_requeridos_timedeposits: '',
	moneda_timedeposits: '',
	tasa_de_interes_timedeposits: '',
	plazo_timedeposits: '',
	monto_minimo_apertura_timedeposits: '',
	monto_maximo_retiros_timedeposits: '',
	monto_promedio_mensual_timedeposits: '',
	monto_retiros_mensuales_timedeposits: '',
	tasa_de_interes_timedeposits1: '',
	plazo_timedeposits1: '',
	monto_minimo_apertura_timedeposits1: '',
	monto_maximo_retiros_timedeposits1: '',
	monto_promedio_mensual_timedeposits1: '',
	monto_retiros_mensuales_timedeposits1: ''
}

export const creditProducts = {
	tipo_de_credito: '',
	fuente_de_fondos: '',
	nombre_del_producto_creditproducts: '',
	descripcion_de_producto_creditproducts: '',
	documentos_requeridos_creditproducts: '',
	moneda_creditproducts: '',
	tasa_de_interes_creditproducts: '',
	plazo_creditproducts: '',
	monto_minimo_apertura_creditproducts: '',
	frecuencia_de_pago_creditproducts: '',
	monto_maximo_retiros_creditproducts: ''
}

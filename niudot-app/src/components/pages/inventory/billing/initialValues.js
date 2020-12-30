
import * as Yup from 'yup'

export const createValues = {
	create_efectivo: ''
}
export const createValuesSchema = {
	create_nombre_del_cliente: Yup.string().min(1).required('Nombres')
}

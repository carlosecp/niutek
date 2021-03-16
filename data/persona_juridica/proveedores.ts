import * as yup from 'yup'

export const refSchema = {
	ppv_nombre_proveedor: '',
	ppv_nombre_contacto: '',
	ppv_telefono: ''
}

export type RefSchema = typeof refSchema

const values: RefSchema[] = []

const validations = yup.array().of(
	yup.object().shape({
		ppv_nombre_proveedor: yup
			.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		ppv_nombre_contacto: yup
			.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		ppv_telefono: yup
			.string()
			.max(30, 'Caracteres Máximos 30')
			.required('Requerido')
	})
)

export const proveedores = { values, validations }

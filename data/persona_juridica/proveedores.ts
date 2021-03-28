import * as yup from 'yup'

export const refSchema = {
	ppv_nombre_proveedor: '',
	ppv_nombre_contacto: '',
	ppv_telefono: ''
}

export type RefSchema = typeof refSchema

const values: RefSchema[] = []

const testingValues = [
	{
		ppv_nombre_proveedor: 'ppv_nombre_proveedor 0',
		ppv_nombre_contacto: 'ppv_nombre_contacto 0',
		ppv_telefono: 'ppv_telefono 0'
	},
	{
		ppv_nombre_proveedor: 'ppv_nombre_proveedor 1',
		ppv_nombre_contacto: 'ppv_nombre_contacto 1',
		ppv_telefono: 'ppv_telefono 1'
	}
]

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

// export const proveedores = { values, validations }
export const proveedores = { values: testingValues, validations }

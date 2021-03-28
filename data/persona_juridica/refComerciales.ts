import * as yup from 'yup'

export const refSchema = {
	prc_nombre_entidad: '',
	prc_persona_contacto: '',
	prc_direccion: '',
	prc_annios_con_entidad: 0,
	prc_telefono: ''
}

export type RefSchema = typeof refSchema

const values: RefSchema[] = []

const testingValues = [
	{
		prc_nombre_entidad: 'prc_nombre_entidad 0',
		prc_persona_contacto: 'prc_persona_contacto 0',
		prc_direccion: 'prc_direccion 0',
		prc_annios_con_entidad: 0,
		prc_telefono: 'prc_telefono 0'
	},
	{
		prc_nombre_entidad: 'prc_nombre_entidad 1',
		prc_persona_contacto: 'prc_persona_contacto 1',
		prc_direccion: 'prc_direccion 1',
		prc_annios_con_entidad: 0,
		prc_telefono: 'prc_telefono 1'
	}
]

const validations = yup.array().of(
	yup.object().shape({
		prc_nombre_entidad: yup
			.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		prc_persona_contacto: yup
			.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		prc_direccion: yup
			.string()
			.max(100, 'Caracteres Máximos 100')
			.required('Requerido'),
		prc_annios_con_entidad: yup
			.number()
			.min(0, 'Valor mínimo 0')
			.required('Requerido'),
		prc_telefono: yup
			.string()
			.max(30, 'Caracteres Máximos 30')
			.required('Requerido')
	})
)

// export const refComerciales = { values, validations }
export const refComerciales = { values: testingValues, validations }

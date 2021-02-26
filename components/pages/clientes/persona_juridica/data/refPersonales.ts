import * as yup from 'yup'

// Utilizado en cada una de las secciones que contienen tablas.
export const refSchema = {
	prp_nombre: '',
	prp_tipo_doc: 0,
	prp_num_doc: '',
	prp_telefono1: '',
	prp_telefono2: '',
	prp_direccion: '',
	prp_lugar_trabajo: '',
	prp_telefono_trabajo: '',
	prp_tiempo_conocer: 0,
	prp_e_mail: ''
}

export type RefSchema = typeof refSchema

const values: RefSchema[] = []

const validations = yup.array().of(
	yup.object().shape({
		prp_nombre: yup
			.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		prp_tipo_doc: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
		prp_num_doc: yup
			.string()
			.max(30, 'Caracteres Máximos 30')
			.required('Requerido'),
		prp_telefono1: yup
			.string()
			.max(30, 'Caracteres Máximos 30')
			.required('Requerido'),
		prp_telefono2: yup
			.string()
			.max(30, 'Caracteres Máximos 30')
			.required('Requerido'),
		prp_direccion: yup
			.string()
			.max(100, 'Caracteres Máximos 100')
			.required('Requerido'),
		prp_lugar_trabajo: yup
			.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		prp_telefono_trabajo: yup
			.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		prp_tiempo_conocer: yup
			.string()
			.max(30, 'Caracteres Máximos 30')
			.required('Requerido'),
		prp_e_mail: yup
			.string()
			.email('Corre Electrónico Inválido')
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido')
	})
)

export const refPersonales = { values, validations }

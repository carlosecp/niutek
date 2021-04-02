import * as yup from 'yup'

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

const testingValues = [
	{
		prp_nombre: 'prp_nombre 0',
		prp_tipo_doc: 1,
		prp_num_doc: 'prp_num_doc 0',
		prp_telefono1: 'prp_telefono1 0',
		prp_telefono2: 'prp_telefono2 0',
		prp_direccion: 'prp_direccion 0',
		prp_lugar_trabajo: 'prp_lugar_trabajo 0',
		prp_telefono_trabajo: 'prp_telefono_trabajo 0',
		prp_tiempo_conocer: 1,
		prp_e_mail: 'prp_e_mail0@test.com'
	},
	{
		prp_nombre: 'prp_nombre 1',
		prp_tipo_doc: 2,
		prp_num_doc: 'prp_num_doc 1',
		prp_telefono1: 'prp_telefono1 1',
		prp_telefono2: 'prp_telefono2 1',
		prp_direccion: 'prp_direccion 1',
		prp_lugar_trabajo: 'prp_lugar_trabajo 1',
		prp_telefono_trabajo: 'prp_telefono_trabajo 1',
		prp_tiempo_conocer: 2,
		prp_e_mail: 'prp_e_mail1@test.com'
	}
]

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
// export const refPersonales = { values: testingValues, validations }

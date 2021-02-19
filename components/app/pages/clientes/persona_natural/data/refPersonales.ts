import * as yup from 'yup'

const values = [
	{
		prp_nombre: 'Test Nombre Referencia 1',
		prp_tipo_doc: 2,
		prp_num_doc: '001-100901-1037U',
		prp_telefono1: '12312323',
		prp_telefono2: '78978923',
		prp_direccion: 'Test Direccion 1',
		prp_lugar_trabajo: 'Test Lugar Trabajo 1',
		prp_telefono_trabajo: '12312312',
		prp_tiempo_conocer: 4,
		prp_e_mail: 'test1@gmail.com',
	},
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
			.required('Requerido'),
	})
)

export const refPersonales = { values, validations }

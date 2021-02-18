import * as yup from 'yup'

const values = []

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
			.min(0, 'Valor Mínimo 0')
			.required('Requerido'),
		prc_telefono: yup
			.string()
			.max(30, 'Caracteres Máximos 30')
			.required('Requerido'),
	})
)

export const referencias_bancarias = [
	{
		prb_nombre_entidad: 'Test Nombre Entidad 1',
		prb_tipo_servicio_recibido: 'Test Tipo Servicio 1',
		prb_fecha_inicio_relacion: '09-10-09',
		prb_annios_con_entidad: 4,
		prb_telefono: '1144557788',
		pct_num_cuenta: '123123',
		pct_cod_moneda: 2,
		pct_cod_banco: 2,
	},
	{
		prb_nombre_entidad: 'Test Nombre Entidad 2',
		prb_tipo_servicio_recibido: 'Test Tipo Servicio 2',
		prb_fecha_inicio_relacion: '09-10-07',
		prb_annios_con_entidad: 5,
		prb_telefono: '1144557788',
		pct_num_cuenta: '123123',
		pct_cod_moneda: 1,
		pct_cod_banco: 3,
	},
]

const referencias_personales = [
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
	{
		prp_nombre: 'Test Nombre Referencia 2',
		prp_tipo_doc: 4,
		prp_num_doc: '001-100901-1037U',
		prp_telefono1: '12390913',
		prp_telefono2: '00999000',
		prp_direccion: 'Test Direccion 2',
		prp_lugar_trabajo: 'Test Lugar Trabajo 2',
		prp_telefono_trabajo: '12312312',
		prp_tiempo_conocer: 2,
		prp_e_mail: 'test2@gmail.com',
	},
]

export default { values, validations }

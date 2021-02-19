import * as yup from 'yup'

const values = [
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

const validations = yup.array().of(yup.object().shape({}))

export const refBancarias = { values, validations }

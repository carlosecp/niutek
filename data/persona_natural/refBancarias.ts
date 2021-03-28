import * as yup from 'yup'
import moment from 'moment'

export const refSchema = {
	prb_nombre_entidad: '',
	prb_tipo_servicio_recibido: '',
	prb_fecha_inicio_relacion: moment().format('YYYY-MM-DD'),
	prb_annios_con_entidad: 0,
	prb_telefono: '',
	pct_num_cuenta: '',
	pct_cod_moneda: 0,
	pct_cod_banco: 0
}

export type RefSchema = typeof refSchema

const values: RefSchema[] = []

const testingValues = [
	{
		prb_nombre_entidad: 'prb_nombre_entidad 0',
		prb_tipo_servicio_recibido: 'prb_tipo_servicio_recibido 0',
		prb_fecha_inicio_relacion: moment().format('YYYY-MM-DD'),
		prb_annios_con_entidad: 0,
		prb_telefono: 'prb_telefono 0',
		pct_num_cuenta: 'pct_num_cuenta 0',
		pct_cod_moneda: 0,
		pct_cod_banco: 0
	},
	{
		prb_nombre_entidad: 'prb_nombre_entidad 1',
		prb_tipo_servicio_recibido: 'prb_tipo_servicio_recibido 1',
		prb_fecha_inicio_relacion: moment().format('YYYY-MM-DD'),
		prb_annios_con_entidad: 0,
		prb_telefono: 'prb_telefono 1',
		pct_num_cuenta: 'pct_num_cuenta 1',
		pct_cod_moneda: 0,
		pct_cod_banco: 0
	}
]

const validations = yup.array().of(
	yup.object().shape({
		prb_nombre_entidad: yup
			.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		prb_tipo_servicio_recibido: yup
			.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		prb_fecha_inicio_relacion: yup
			.date()
			.required('Requerido')
			.max(moment(), 'Fecha inválida')
			.typeError('Fecha Inválida (formato YYYY-MM-DD)'),
		prb_annios_con_entidad: yup
			.number()
			.min(0, 'Valor mínimo 0')
			.required('Requerido'),
		prb_telefono: yup
			.string()
			.max(30, 'Caracteres Máximos 30')
			.required('Requerido'),
		pct_num_cuenta: yup
			.string()
			.max(50, 'Caracteres Máximos 50')
			.required('Requerido'),
		pct_cod_moneda: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
		pct_cod_banco: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido')
	})
)

// export const refBancarias = { values, validations }
export const refBancarias = { values: testingValues, validations }

import * as yup from 'yup'
import moment from 'moment'

// Utilizado en cada una de las secciones que contienen tablas.
export const refSchema = {
	prb_nombre_entidad: '',
	prb_tipo_servicio_recibido: '',
	prb_fecha_inicio_relacion: '',
	prb_annios_con_entidad: 0,
	prb_telefono: '',
	pct_num_cuenta: '',
	pct_cod_moneda: 0,
	pct_cod_banco: 0
}

export type RefSchema = typeof refSchema

const values: RefSchema[] = []

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
			.min(0, 'Valor Mínimo 0')
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

export const refBancarias = { values, validations }

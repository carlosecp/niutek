import * as yup from 'yup'
import moment from 'moment'

export const refSchema = {
	pcr_cod_cargo: 0,
	pcr_cod_moneda: 0,
	pcr_valor: (0).toFixed(2),
	pcr_cod_tipo: 0,
	pcr_cod_aplica: 0
}

export type RefSchema = typeof refSchema

const values: RefSchema[] = []

const testingValues = [
	{
		pcr_cod_cargo: 0,
		pcr_cod_moneda: 0,
		pcr_valor: (0).toFixed(2),
		pcr_cod_tipo: 0,
		pcr_cod_aplica: 0
	},
	{
		pcr_cod_cargo: 0,
		pcr_cod_moneda: 0,
		pcr_valor: (0).toFixed(2),
		pcr_cod_tipo: 0,
		pcr_cod_aplica: 0
	}
]

const validations = yup.array().of(
	yup.object().shape({
		pcr_cod_cargo: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
		pcr_cod_moneda: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
		pcr_valor: yup.number().min(0, 'Valor mínimo 0').required('Requerido'),
		pcr_cod_tipo: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido'),
		pcr_cod_aplica: yup
			.mixed()
			.notOneOf([0], 'Seleccione un valor')
			.required('Requerido')
	})
)

// export const cargos = { values, validations }
export const cargos = { values: testingValues, validations }

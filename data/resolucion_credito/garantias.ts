import * as yup from 'yup'
import moment from 'moment'

export const refSchema = {
	pcr_cod_moneda: 0,
	pcr_cod_tipo: 0,
	pcr_descripcion_cargo: '',
	pcr_valor: 0
}

export type RefSchema = typeof refSchema

const values: RefSchema[] = []

const testingValues = [
	{
		pcr_cod_moneda: 0,
		pcr_cod_tipo: 0,
		pcr_descripcion_cargo: '',
		pcr_valor: 0
	},
	{
		pcr_cod_moneda: 0,
		pcr_cod_tipo: 0,
		pcr_descripcion_cargo: '',
		pcr_valor: 0
	}
]

const validations = {}

export const garantias = { values: testingValues, validations }

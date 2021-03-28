import * as yup from 'yup'

export const refSchema = {
	prc_cod_moneda: 0,
	prc_descripcion_cargo: '',
	prc_valor: 0,
	prc_cod_tipo: 0
}

export type RefSchema = typeof refSchema

const values: RefSchema[] = []

const testingValues = [
	{
		prc_cod_moneda: 0,
		prc_cod_tipo: 0,
		prc_valor: (0).toFixed(2),
		prc_descripcion_cargo: 'prc_descripcion_cargo 0'
	},
	{
		prc_cod_moneda: 0,
		prc_cod_tipo: 0,
		prc_valor: (0).toFixed(2),
		prc_descripcion_cargo: 'prc_descripcion_cargo 1'
	}
]

const validations = {}

// export const garantias = { values, validations }
export const garantias = { values: testingValues, validations }

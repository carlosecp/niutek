import * as yup from 'yup'
import { garantias } from './garantias'

export const navLinks = [{ name: 'Garantías', anchor: 'garantias' }]

export enum NavLinks {
	Garantias
}

export type GarantiasSearchResult = {
	cod_producto: number
	nombre: string
	description: string
}

export const getDescription = (result: GarantiasSearchResult) => ({
	accessor: 1,
	description: `Hello`
})

const values = {
	...garantias.values
}
const validations = yup.object({
	...garantias.validations
})

export type GarantiasValues = typeof values
export type GarantiasValidationSchema = typeof validations

export const initialValues = { values, validations }

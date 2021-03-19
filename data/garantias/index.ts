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
	accessor: result.cod_producto,
	description: result.nombre
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
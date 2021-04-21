import * as yup from 'yup'
import { garantias } from './garantias'

export const navLinks = [{ name: 'Garantías', anchor: 'garantias' }]

export enum NavLinks {
	Garantias
}

export type SearchResults = {
	cod_cliente: number
	nombres: string
	apellidos: string
	description: string
}

export const getDescription = (result: SearchResults) => ({
	accessor: result.cod_cliente,
	description: `${result.nombres} ${result.apellidos}`
})

const values = {
	...garantias.values
}
const validations = yup.object({
	...garantias.validations
})

export type Values = typeof values
export type Validations = typeof validations

export const initialValues = { values, validations }

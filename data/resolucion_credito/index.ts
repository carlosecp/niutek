import * as yup from 'yup'
import { resolucion } from './resolucion'
import { garantias } from './garantias'

export const navLinks = [
	{ name: 'Resolución', anchor: 'productos' },
	{ name: 'Garantías', anchor: 'garantias' },
	{ name: 'Observaciones', anchor: 'observaciones' }
]

export enum NavLinks {
	Resolucion,
	Garantias,
	Observaciones
}

export type SearchResults = {
	cod_producto: number
	nombre: string
	description: string
}

export const getDescription = (result: SearchResults) => ({
	accessor: result.cod_producto,
	description: result.nombre
})

const values = {
	...resolucion.values,
	garantias: garantias.values
}
const validations = yup.object({
	...resolucion.validations
})

export type Values = typeof values
export type Validations = typeof validations

export const initialValues = { values, validations }

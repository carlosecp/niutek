import * as yup from 'yup'
import { productos } from './productos'
import { cargos } from './cargos'

export const navLinks = [
	{ name: 'Formalización', anchor: '_formalizacion' },
	{ name: 'Cargos', anchor: '_cargos' }
]

export enum NavLinks {
	Productos,
	Cargos
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
	...productos.values,
	cargos: cargos.values
}
const validations = yup.object({
	...productos.validations
})

export type Values = typeof values
export type Validations = typeof validations

export const initialValues = { values, validations }

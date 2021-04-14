import * as yup from 'yup'
import { productos } from './productos'

export const navLinks = [{ name: 'Productos de Ahorro', anchor: 'productos' }]

export enum NavLinks {
	Productos
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
	...productos.values
}
const validations = yup.object({
	...productos.validations
})

export type Values = typeof values
export type Validations = typeof validations

export const initialValues = { values, validations }

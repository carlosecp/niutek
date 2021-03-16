import * as yup from 'yup'
import { productos } from './productos'

export const navLinks = [{ name: 'Productos', anchor: 'productos' }]

export enum NavLinks {
	Productos
}

export type ProductosDeAhorroSearchResult = {
	cod_producto: number
	nombre: string
	description: string
}

export const getDescription = (result: ProductosDeAhorroSearchResult) => ({
	accessor: result.cod_producto,
	description: result.nombre
})

const values = {
	...productos.values
}
const validations = yup.object({
	...productos.validations
})

export type ProductosDeAhorroValues = typeof values
export type ProductosDeAhorroValidationSchema = typeof validations

export const initialValues = { values, validations }

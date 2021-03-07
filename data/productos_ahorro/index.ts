import * as yup from 'yup'
import { productos } from './productos'
import { cargos } from './cargos'

export const navLinks = [
	{ name: 'Productos', anchor: '_productos' },
	{ name: 'Cargos', anchor: '_cargos' }
]

export type ProductosAhorroSearchResult = {
	cod_producto: number
	nombre: string
	description: string
}

export const getDescription = (result: ProductosAhorroSearchResult) => ({
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

export type ProductoDeAhorroValues = typeof values
export type ProductoDeAhorroValidationSchema = typeof validations

export const initialValues = { values, validations }

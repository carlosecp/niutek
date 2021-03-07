import * as yup from 'yup'
import { productos } from './productos'
import { cargos } from './cargos'

export const navLinks = [
	{ name: 'Productos', anchor: '_productos' },
	{ name: 'Cargos', anchor: '_cargos' }
]

export type ProductoDeCreditoSearchResult = {
	cod_producto: number
	nombre: string
	description: string
}

export const getDescription = (result: ProductoDeCreditoSearchResult) => ({
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

export type ProductoDeCreditoValues = typeof values
export type ProductoDeCreditoValidationSchema = typeof validations

export const initialValues = { values, validations }

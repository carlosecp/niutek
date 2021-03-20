import * as yup from 'yup'
import { productos } from './productos'
import { cargos } from './cargos'

export const navLinks = [
	{ name: 'Resolución', anchor: 'productos' },
	{ name: 'Cargos', anchor: 'cargos' }
]

export enum NavLinks {
	Productos,
	Cargos
}

export type ResolucionDeCreditoSearchResult = {
	cod_producto: number
	nombre: string
	description: string
}

export const getDescription = (result: ResolucionDeCreditoSearchResult) => ({
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

export type ResolucionDeCreditoValues = typeof values
export type ResolucionDeCreditoValidationSchema = typeof validations

export const initialValues = { values, validations }

import * as yup from 'yup'
import { productos } from './productos'
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
	garantias: garantias.values
}
const validations = yup.object({
	...productos.validations
})

export type ResolucionDeCreditoValues = typeof values
export type ResolucionDeCreditoValidationSchema = typeof validations

export const initialValues = { values, validations }

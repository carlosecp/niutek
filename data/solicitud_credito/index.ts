import * as yup from 'yup'
import { solicitud } from './solicitud'
import { garantias } from './garantias'

export const navLinks = [
	{ name: 'Solicitud', anchor: 'solicitud' },
	{ name: 'Garantías', anchor: 'garantias' },
	{ name: 'Observaciones', anchor: 'observaciones' }
]

export enum NavLinks {
	Solicitud,
	Garantias,
	Observaciones
}

export type SolicitudDeCreditoSearchResult = {
	cod_producto: number
	nombre: string
	description: string
}

export const getDescription = (result: SolicitudDeCreditoSearchResult) => ({
	accessor: result.cod_producto,
	description: result.nombre
})

const values = {
	...solicitud.values,
	garantias: garantias.values
}
const validations = yup.object({
	...solicitud.validations
})

export type SolicitudDeCreditoValues = typeof values
export type SolicitudDeCreditoValidationSchema = typeof validations

export const initialValues = { values, validations }

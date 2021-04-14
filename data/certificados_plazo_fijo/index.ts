import * as yup from 'yup'
import { certificados } from './certificados'

export const navLinks = [
	{ name: 'Certificado a Plazo Fijo', anchor: 'certificados' }
]

export enum NavLinks {
	Certificados
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
	...certificados.values
}
const validations = yup.object({
	...certificados.validations
})

export type Values = typeof values
export type Validations = typeof validations

export const initialValues = { values, validations }

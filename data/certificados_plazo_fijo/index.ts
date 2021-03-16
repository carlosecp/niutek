import * as yup from 'yup'
import { certificados } from './certificados'

export const navLinks = [
	{ name: 'Certificado a Plazo Fijo', anchor: 'certificados' }
]

export enum NavLinks {
	Certificados
}

export type CertificadosPlazoFijoSearchResults = {
	cod_producto: number
	nombre: string
	description: string
}

export const getDescription = (result: CertificadosPlazoFijoSearchResults) => ({
	accessor: result.cod_producto,
	description: result.nombre
})

const values = {
	...certificados.values
}
const validations = yup.object({
	...certificados.validations
})

export type CertificadosPlazoFijoValues = typeof values
export type CertificadosPlazoFijoValidationSchema = typeof validations

export const initialValues = { values, validations }

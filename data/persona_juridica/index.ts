import * as yup from 'yup'
import { personaJuridica } from './personaJuridica'
import { origenFondos } from './origenFondos'
import { refComerciales } from './refComerciales'
import { refBancarias } from './refBancarias'
import { proveedores } from './proveedores'

export const navLinks = [
	{ name: 'Persona Jurídica', anchor: '_persona_juridica' },
	{ name: 'Origen de Fondos', anchor: '_origen_fondos' },
	{ name: 'Referencias Comerciales', anchor: '_referencias_comerciales' },
	{ name: 'Referencias Bancarias', anchor: '_referencias_bancarias' },
	{ name: 'Referencias Personales', anchor: '_referencias_personales' }
]

export type PersonaJuridicaSearchResult = {
	cod_cliente: number
	nombre: string
	description: string
}

// Funcion utilizada para generar la descripcion que se muestra en la seccion de busqueda. Funcion llamada en Results.tsx.
export const getDescription = (result: PersonaJuridicaSearchResult) => ({
	accessor: result.cod_cliente,
	description: `${result.nombre}`
})

const values = {
	...personaJuridica.values,
	...origenFondos.values,
	referencias_comerciales: refComerciales.values,
	referencias_bancarias: refBancarias.values,
	proveedores: proveedores.values
}

const validations = yup.object({
	...personaJuridica.validations,
	...origenFondos.validations,
	referencias_comerciales: refComerciales.validations,
	referencias_bancarias: refBancarias.validations,
	proveedores: proveedores.validations
})

export type PersonaJuridicaValues = typeof values
export type PersonaJuridicaValidationSchema = typeof validations

export const initialValues = { values, validations }

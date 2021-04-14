import * as yup from 'yup'
import { personaJuridica } from './personaJuridica'
import { origenFondos } from './origenFondos'
import { refComerciales } from './refComerciales'
import { refBancarias } from './refBancarias'
import { proveedores } from './proveedores'
import { accionistas } from './accionistas'

export const navLinks = [
	{ name: 'Persona Jurídica', anchor: 'persona_juridica' },
	{ name: 'Origen de Fondos', anchor: 'origen_fondos' },
	{ name: 'Referencias Comerciales', anchor: 'referencias_comerciales' },
	{ name: 'Referencias Bancarias', anchor: 'referencias_bancarias' },
	{ name: 'Referencias Personales', anchor: 'referencias_personales' },
	{ name: 'Proveedores', anchor: 'proveedores' },
	{ name: 'Accionistas', anchor: 'accionistas' }
]

export enum NavLinks {
	PersonaJuridica,
	OrigenFondos,
	RefComerciales,
	RefBancarias,
	RefPersonales,
	Proveedores,
	Accionistas
}

export type SearchResults = {
	cod_cliente: number
	nombre: string
	description: string
}

export const getDescription = (result: SearchResults) => ({
	accessor: result.cod_cliente,
	description: `${result.nombre}`
})

const values = {
	...personaJuridica.values,
	...origenFondos.values,
	referencias_comerciales: refComerciales.values,
	referencias_bancarias: refBancarias.values,
	proveedores: proveedores.values,
	accionistas: accionistas.values
}

const validations = yup.object({
	...personaJuridica.validations,
	...origenFondos.validations,
	referencias_comerciales: refComerciales.validations,
	referencias_bancarias: refBancarias.validations,
	proveedores: proveedores.validations,
	accionistas: accionistas.validations
})

export type Values = typeof values
export type Validations = typeof validations

export const initialValues = { values, validations }

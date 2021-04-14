import * as yup from 'yup'
import { personaNatural } from './personaNatural'
import { datosProfesionales } from './datosProfesionales'
import { origenFondos } from './origenFondos'
import { refComerciales } from './refComerciales'
import { refBancarias } from './refBancarias'
import { refPersonales } from './refPersonales'

export const navLinks = [
	{ name: 'Persona Natural', anchor: 'persona_natural' },
	{ name: 'Datos Profesionales', anchor: 'datos_profesionales' },
	{ name: 'Origen de Fondos', anchor: 'origen_fondos' },
	{ name: 'Referencias Comerciales', anchor: 'referencias_comerciales' },
	{ name: 'Referencias Bancarias', anchor: 'referencias_bancarias' },
	{ name: 'Referencias Personales', anchor: 'referencias_personales' }
]

export enum NavLinks {
	PersonaNatural,
	DatosProfesionales,
	OrigenFondos,
	RefComerciales,
	RefBancarias,
	RefPersonales
}

export type SearchResults = {
	cod_cliente: number
	nombres: string
	apellidos: string
	description: string
}

export const getDescription = (result: SearchResult) => ({
	accessor: result.cod_cliente,
	description: `${result.nombres} ${result.apellidos}`
})

const values = {
	...personaNatural.values,
	...datosProfesionales.values,
	...origenFondos.values,
	referencias_comerciales: refComerciales.values,
	referencias_bancarias: refBancarias.values,
	referencias_personales: refPersonales.values
}

const validations = yup.object({
	...personaNatural.validations,
	...datosProfesionales.validations,
	...origenFondos.validations,
	referencias_comerciales: refComerciales.validations,
	referencias_bancarias: refBancarias.validations,
	referencias_personales: refPersonales.validations
})

export type Values = typeof values
export type Validations = typeof validations

export const initialValues = { values, validations }

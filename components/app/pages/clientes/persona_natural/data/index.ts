import * as yup from 'yup'
import { personaNatural } from './personaNatural'
import { datosProfesionales } from './datosProfesionales'
import { origenFondos } from './origenFondos'
import { refComerciales } from './refComerciales'
import { refBancarias } from './refBancarias'
import { refPersonales } from './refPersonales'

// Link en navigation bar.
export const navLinks = [
	{ name: 'Persona Natural', anchor: '_persona_natural' },
	{ name: 'Datos Profesionales', anchor: '_datos_profesionales' },
	{ name: 'Origen de Fondos', anchor: '_origen_fondos' },
	{ name: 'Referencias Comerciales', anchor: '_referencias_comerciales' },
	{ name: 'Referencias Bancarias', anchor: '_referencias_bancarias' },
	{ name: 'Referencias Personales', anchor: '_referencias_personales' }
]

// Tipo para getDescription y GlobalSearchResults.
export type PersonaNaturalSearchResult = {
	cod_cliente: number
	nombres: string
	apellidos: string
	description: string
}

// Funcion utilizada para generar la descripcion que se muestra en la seccion de busqueda. Funcion llamada en Results.tsx.
export const getDescription = (result: PersonaNaturalSearchResult) => ({
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

export type PersonaNaturalValues = typeof values
export type PersonaNaturalValidationSchema = typeof validations

export const initialValues = { values, validations }

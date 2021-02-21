import * as yup from 'yup'
import { personaNatural } from './personaNatural'
import { datosProfesionales } from './datosProfesionales'
import { origenFondos } from './origenFondos'
import { refComerciales } from './refComerciales'
import { refBancarias } from './refBancarias'
import { refPersonales } from './refPersonales'

export type PersonaNaturalSearchResult = {
	cod_cliente: number
	nombres: string
	apellidos: string
	description: string
}

const values = {
	...personaNatural.values,
	...datosProfesionales.values,
	...origenFondos.values,
	referencias_comerciales: refComerciales.values,
	referencias_bancarias: refBancarias.values,
	referencias_personales: refPersonales.values
}

// Este es el tipo de datos que utiliza el componente de formularios, son todos los campos en un unico formulario de Formik.
export type PersonaNaturalValues = typeof values

const validations = yup.object({
	...personaNatural.validations,
	...datosProfesionales.validations,
	...origenFondos.validations,
	referencias_comerciales: refComerciales.validations,
	referencias_bancarias: refBancarias.validations,
	referencias_personales: refPersonales.validations
})

// A su vez estes es el validation schema del formulario completo.
export type ValidationSchema = typeof validations

export const initialValues = { values, validations }

export const navLinks = [
	{ name: 'Persona Natural', anchor: '_persona_natural' },
	{ name: 'Datos Profesionales', anchor: '_datos_profesionales' },
	{ name: 'Origen de Fondos', anchor: '_origen_fondos' },
	{ name: 'Referencias Comerciales', anchor: '_referencias_comerciales' },
	{ name: 'Referencias Bancarias', anchor: '_referencias_bancarias' },
	{ name: 'Referencias Personales', anchor: '_referencias_personales' }
]

export const getDescription = (result: SearchResult) => ({
	accessor: result.cod_cliente,
	description: `${result.nombres} ${result.apellidos}`
})

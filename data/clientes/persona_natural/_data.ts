import * as yup from 'yup'
import {
	personaNaturalValidations,
	personaNaturalValues,
} from './personaNatural'
import {
	datosProfesionalesValidations,
	datosProfesionalesValues,
} from './datosProfesionales'
import { origenFondosValidations, origenFondosValues } from './origenFondos'
import { refComercialesValues } from './referenciasComerciales'

export const initialValues = {
	...personaNaturalValues,
	...datosProfesionalesValues,
	...origenFondosValues,
	referenciasComerciales: refComercialesValues,
}

export const validationSchema = yup.object({
	...personaNaturalValidations,
	...datosProfesionalesValidations,
	...origenFondosValidations,
})

// Utilizado en /types/, para luego ser utilizado en FormPage.tsx o componente que consuman sus context con useFormikContext()
export type ValuesPersonaNatural = typeof initialValues
export type ValidationsPersonaNatural = typeof validationSchema

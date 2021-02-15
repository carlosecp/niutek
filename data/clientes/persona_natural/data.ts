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

export const initialValues = {
	...personaNaturalValues,
	...datosProfesionalesValues,
	...origenFondosValues,
}

export const validationSchema = yup.object({
	...personaNaturalValidations,
	...datosProfesionalesValidations,
	...origenFondosValidations,
})

// Utilizado en /interfaces.ts, para luego ser utilizado en FormPage.tsx o componente que consuman sus context con useFormikContext()
export type valuesPersonaNatural = typeof initialValues
export type validationsPersonaNatural = typeof validationSchema

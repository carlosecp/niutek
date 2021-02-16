import * as yup from 'yup'
import personaNatural from './personaNatural'
import datosProfesionales from './datosProfesionales'
import origenFondos from './origenFondos'
import refComerciales from './refComerciales'

const values = {
	...personaNatural.values,
	...datosProfesionales.values,
	...origenFondos,
	referencias_comerciales: refComerciales.values,
}

const validations = yup.object({
	...personaNatural.validations,
	...datosProfesionales.validations,
})

export default { values, validations }

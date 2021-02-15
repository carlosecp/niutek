import type { validationsPersonaNatural } from '../../../data/clientes/persona_natural/data'
import {
	initialValues,
	validationSchema,
} from '../../../data/clientes/persona_natural/data'
import {
	PersonaNatural,
	DatosProfesionales,
	OrigenFondos,
} from '../../../components/pages/clientes/persona_natural/Components'
import FormPage from '../../../components/templates/forms/FormPage'

const crear = () => {
	return (
		<FormPage<validationsPersonaNatural>
			initialValues={initialValues}
			validationSchema={validationSchema}
		>
			<PersonaNatural />
			<DatosProfesionales />
			<OrigenFondos />
			<button type='submit'>Submit</button>
		</FormPage>
	)
}

export default crear

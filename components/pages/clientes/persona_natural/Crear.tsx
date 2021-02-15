import {
	initialValues,
	validationSchema,
	validationsPersonaNatural,
} from '../../../../data/clientes/persona_natural/data'
import PersonaNatural from './PersonaNatural'
import DatosProfesionales from './DatosProfesionales'
import OrigenFondos from './OrigenFondos'
import FormPage from '../../../templates/forms/FormPage'

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

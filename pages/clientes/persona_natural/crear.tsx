import PersonaNatural from '../../../components/pages/clientes/persona_natural/PersonaNatural'
import DatosProfesionales from '../../../components/pages/clientes/persona_natural/DatosProfesionales'
import FormPage from '../../../components/templates/forms/FormPage'
import {
	initialValues,
	validationSchema,
	validationsPersonaNatural,
} from '../../../data/clientes/persona_natural'

const crear = () => {
	return (
		<FormPage<validationsPersonaNatural>
			initialValues={initialValues}
			validationSchema={validationSchema}
		>
			<PersonaNatural />
			<DatosProfesionales />
			<button type='submit'>Submit</button>
		</FormPage>
	)
}

export default crear

import {
	initialValues,
	validationSchema,
	ValidationsPersonaNatural,
} from '../../../../data/clientes/persona_natural/_data'
import PersonaNatural from './PersonaNatural'
import DatosProfesionales from './DatosProfesionales'
import OrigenFondos from './OrigenFondos'
import FormPage from '../../../templates/forms/FormPage'
import ReferenciasComerciales from './ReferenciasComerciales'

const crear = () => {
	return (
		<FormPage<ValidationsPersonaNatural>
			initialValues={initialValues}
			validationSchema={validationSchema}
		>
			<PersonaNatural />
			<DatosProfesionales />
			<OrigenFondos />
			<ReferenciasComerciales />
			<button type='submit'>Submit</button>
		</FormPage>
	)
}

export default crear

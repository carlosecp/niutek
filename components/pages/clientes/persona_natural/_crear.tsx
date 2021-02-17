import data from '../../../../data/clientes/persona_natural/_data'
import PersonaNatural from './PersonaNatural'
import DatosProfesionales from './DatosProfesionales'
import OrigenFondos from './OrigenFondos'
import FormPage from '../../../templates/forms/FormPage'
import ReferenciasComerciales from './RefComerciales'

export type Values = typeof data.values
export type Validations = typeof data.validations

interface Props {
	options: {
		dep: { cod_depto: number; nom_depto: string }[]
		p_cod_nac: { codigo: number; descripcion: string }[]
		p_moneda: { codigo: number; descripcion: string }[]
		p_sexo: { codigo: number; descripcion: string }[]
		p_tipo_doc: { codigo: number; descripcion: string }[]
		pct_cod_banco: { codigo: number; descripcion: string }[]
	}
}

const Crear = ({ options }) => {
	return (
		<FormPage<Values, Validations> data={data}>
			<PersonaNatural options={options} />
			<DatosProfesionales />
			<OrigenFondos />
			<ReferenciasComerciales />
			<button type='submit'>Submit</button>
		</FormPage>
	)
}

export default Crear

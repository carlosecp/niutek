import type {
	PersonaNaturalResult,
	SearchConfig,
} from '../../../../interfaces/search'
import { useState } from 'react'
import defaults from '../../../../data/clientes/persona_natural/_data'
import PersonaNatural from './PersonaNatural'
import DatosProfesionales from './DatosProfesionales'
import OrigenFondos from './OrigenFondos'
import Form from '../../../templates/forms/Form'
import RefComerciales from './RefComerciales'
import RefBancarias from './RefBancarias'
import Navbar from '../../../layout/Navbar'
import { resourceLimits } from 'worker_threads'
import SearchResults from '../../../templates/search/SearchResults'

export type Values = typeof defaults.values
export type Validations = typeof defaults.validations

const config: SearchConfig = {
	placeholder: 'Buscar persona natural',
	url: 'busca/clientes_natural',
}

const getDescription = (result: PersonaNaturalResult) => ({
	accessor: result.cod_cliente,
	description: `${result.nombres} ${result.apellidos}`,
})

// & Me falta tipar las options
const Index = ({ options }) => {
	const [searchResults, setSearchResults] = useState<PersonaNaturalResult[]>(
		[]
	)

	const updateResults = (results: PersonaNaturalResult[]) => {
		console.log(results)
		setSearchResults(results)
	}

	return (
		<main className='sm:ml-64 relative bg-light'>
			<Navbar<PersonaNaturalResult>
				config={config}
				updateResults={updateResults}
			/>
			<SearchResults<PersonaNaturalResult>
				results={searchResults}
				getDescription={getDescription}
			/>
			<Form<Values, Validations> data={defaults}>
				<PersonaNatural options={options} />
				<DatosProfesionales />
				<OrigenFondos />
				<RefComerciales />
				<RefBancarias options={options} />
				<button type='submit'>Submit</button>
			</Form>
		</main>
	)
}

export default Index

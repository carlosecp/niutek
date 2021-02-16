import type {
	SearchConfig,
	SearchResPersonaJuridica,
} from '../../../../types/search'
import { useState } from 'react'
import Meta from '../../../Meta'
import IndexPage from '../../../layout/IndexPage'
import Search from '../../../templates/search/Search'
import SearchResults from '../../../templates/search/SearchResults'

const searchConfig: SearchConfig = {
	title: 'Persona Jurídica',
	heading: 'Buscar Cliente Persona Jurídica',
	description: 'Busca entre los clientes persona jurídica registrados.',
	labels: {
		searchbox: 'Nombre del cliente',
		button: 'Cliente',
	},
	url: 'busca/clientes_juridico',
}
const getDescription = (result: SearchResPersonaJuridica) => ({
	idKey: result.cod_cliente,
	description: `${result.cod_cliente} - ${result.nombre}`,
})

const PersonaNaturalIndex = () => {
	const [results, setResults] = useState<SearchResPersonaJuridica[]>([])

	const updateResults = (results: SearchResPersonaJuridica[]) => {
		setResults(results)
	}

	return (
		<>
			<Meta title={searchConfig.title} />
			<IndexPage>
				<section className='text-center'>
					<article className='mb-4'>
						<h1 className='font-semibold text-2xl'>
							{searchConfig.title}
						</h1>
						<p className='text-gray-700'>
							{searchConfig.description}
						</p>
					</article>
					<Search
						searchConfig={searchConfig}
						updateResults={updateResults}
					/>
				</section>
				<SearchResults<SearchResPersonaJuridica>
					results={results}
					getDescription={getDescription}
				/>
			</IndexPage>
		</>
	)
}

export default PersonaNaturalIndex

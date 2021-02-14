import { useState } from 'react'
import Meta from '../../../components/Meta'
import PageIndex from '../../../components/PageIndex'
import Search from '../../../components/search/Search'
import SearchResult from '../../../components/search/SearchResult'
import { SearchConfig, SearchPersonaNatural } from '../../../interfaces'

const searchConfig: SearchConfig = {
	title: 'Persona Natural',
	heading: 'Buscar Cliente Persona Natural',
	description: 'Busca entre los clientes persona natural registrados.',
	labels: {
		searchbox: 'Nombre del cliente',
		button: 'Cliente',
	},
	url: 'busca/clientes_natural',
}

const index = () => {
	const [searchResults, setSearchResults] = useState<SearchPersonaNatural[]>(
		[]
	)

	const updateResults = (results: SearchPersonaNatural[]) => {
		setSearchResults(results)
	}

	return (
		<>
			<Meta title={searchConfig.title} />
			<PageIndex>
				<section className='text-center'>
					<article className='mb-4'>
						<h1 className='font-semibold text-2xl'>
							{searchConfig.title}
						</h1>
						<p className='text-gray-700'>
							{searchConfig.description}
						</p>
					</article>
					<Search<SearchPersonaNatural>
						searchConfig={searchConfig}
						updateResults={updateResults}
					/>
				</section>
				<section>
					{searchResults.map((result) => (
						<SearchResult
							key={result.cod_cliente}
							id={result.cod_cliente}
							title={`${result.nombres} ${result.apellidos}`}
						/>
					))}
				</section>
			</PageIndex>
		</>
	)
}

export default index

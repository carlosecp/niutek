import { useState } from 'react'
import { SearchConfig, SearchPersonaNatural } from '../../../interfaces'
import Meta from '../../../components/Meta'
import PageIndex from '../../../components/PageIndex'
import Search from '../../../components/search/Search'
import SearchResults from '../../../components/search/SearchResults'

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

const getDescription = (result: SearchPersonaNatural) => ({
	idKey: result.cod_cliente,
	description: `${result.cod_cliente} - ${result.nombres} ${result.apellidos}`,
})

const index = () => {
	const [results, setResults] = useState<SearchPersonaNatural[]>([])

	const updateResults = (results: SearchPersonaNatural[]) => {
		setResults(results)
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
				<SearchResults<SearchPersonaNatural>
					results={results}
					getDescription={getDescription}
				/>
			</PageIndex>
		</>
	)
}

export default index

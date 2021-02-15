import type { searchConfig, searchPersonaNatural } from '../../../interfaces'
import { useState } from 'react'
import Meta from '../../../components/Meta'
import IndexPage from '../../../components/IndexPage'
import Search from '../../../components/templates/search/Search'
import SearchResults from '../../../components/templates/search/SearchResults'

const config: searchConfig = {
	title: 'Persona Natural',
	heading: 'Buscar Cliente Persona Natural',
	description: 'Busca entre los clientes persona natural registrados.',
	labels: {
		searchbox: 'Nombre o número de ID del cliente',
		button: 'Cliente',
	},
	url: 'busca/clientes_natural',
}

const getDescription = (result: searchPersonaNatural) => ({
	idKey: result.cod_cliente,
	description: `${result.cod_cliente} - ${result.nombres} ${result.apellidos}`,
})

const index = () => {
	const [results, setResults] = useState<searchPersonaNatural[]>([])

	const updateResults = (results: searchPersonaNatural[]) => {
		setResults(results)
	}

	return (
		<>
			<Meta title={config.title} />
			<IndexPage>
				<section className='text-center'>
					<article className='mb-4'>
						<h1 className='font-semibold text-2xl'>
							{config.title}
						</h1>
						<p className='text-gray-700'>{config.description}</p>
					</article>
					<Search<searchPersonaNatural>
						searchConfig={config}
						updateResults={updateResults}
					/>
				</section>
				<SearchResults<searchPersonaNatural>
					results={results}
					getDescription={getDescription}
				/>
			</IndexPage>
		</>
	)
}

export default index

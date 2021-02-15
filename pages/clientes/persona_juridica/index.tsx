import { useState } from 'react'
import { searchConfig, searchPersonaJuridica } from '../../../interfaces'
import Meta from '../../../components/Meta'
import IndexPage from '../../../components/IndexPage'
import Search from '../../../components/templates/search/Search'
import SearchResults from '../../../components/templates/search/SearchResults'

const searchConfig: searchConfig = {
	title: 'Persona Jurídica',
	heading: 'Buscar Cliente Persona Jurídica',
	description: 'Busca entre los clientes persona jurídica registrados.',
	labels: {
		searchbox: 'Nombre del cliente',
		button: 'Cliente',
	},
	url: 'busca/clientes_juridico',
}
const getDescription = (result: searchPersonaJuridica) => ({
	idKey: result.cod_cliente,
	description: `${result.cod_cliente} - ${result.nombre}`,
})

const index = () => {
	const [results, setResults] = useState<searchPersonaJuridica[]>([])

	const updateResults = (results: searchPersonaJuridica[]) => {
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
				<SearchResults<searchPersonaJuridica>
					results={results}
					getDescription={getDescription}
				/>
			</IndexPage>
		</>
	)
}

export default index

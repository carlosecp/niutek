import { useState } from 'react'
import { searchConfig, searchPersonaJuridica } from '../../../../types'
import Meta from '../../../Meta'
import IndexPage from '../../../layout/IndexPage'
import Search from '../../../templates/search/Search'
import SearchResults from '../../../templates/search/SearchResults'

const config: searchConfig = {
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

const Index = () => {
	const [results, setResults] = useState<searchPersonaJuridica[]>([])

	const updateResults = (results: searchPersonaJuridica[]) => {
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
					<Search
						searchConfig={config}
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

export default Index

import type { SearchConfig } from '../../../../interfaces/search'
import { useState } from 'react'
import Meta from '../../../Meta'
import IndexPage from '../../../layout/IndexPage'
import Search from '../../../templates/search/Search'
import SearchResults from '../../../templates/search/SearchResults'

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

interface Response {
	cod_cliente: number
	nombres: string
	apellidos: string
	description: string
}

const getDescription = (result: Response) => ({
	idKey: result.cod_cliente,
	description: `${result.cod_cliente} - ${result.nombres} ${result.apellidos}`,
})

const Index = () => {
	const [results, setResults] = useState<Response[]>([])

	const updateResults = (results: Response[]) => {
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
				<SearchResults<Response>
					results={results}
					getDescription={getDescription}
				/>
			</IndexPage>
		</>
	)
}

export default Index

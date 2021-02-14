import { useState } from 'react'
import Meta from '../../../components/Meta'
import PageIndex from '../../../components/PageIndex'
import { SearchConfig } from '../../../interfaces'

const searchConfig: SearchConfig = {
	title: 'Persona Jurídica',
	heading: 'Buscar Cliente Persona Jurídica',
	description: 'Busca entre los clientes persona jurídica registrados.',
	labels: {
		searchbox: 'Nombre del cliente',
		button: 'Cliente',
	},
	url: 'busca/persona_juridica',
}
interface SearchResults {
	cod_cliente: number
	nombres: string
	apellidos: string
}

const index = () => {
	const [searchResults, setSearchResults] = useState<SearchResults[]>([])

	const updateResults = (results: SearchResults[]) => {
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
					<Search
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

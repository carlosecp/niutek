import type { SearchConfig } from '../../../../interfaces/search'
import { useState } from 'react'
import Meta from '../../../Meta'
import IndexPage from '../../../layout/IndexPage'
import Search from '../../../templates/search/Search'
import SearchResults from '../../../templates/search/SearchResults'

const config: SearchConfig = {
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
	accessor: `ID: ${result.cod_cliente}`,
	description: `${result.nombres} ${result.apellidos}`,
})

const Index = () => {
	const [results, setResults] = useState<Response[]>([])

	const updateResults = (results: Response[]) => {
		setResults(results)
	}

	return (
		<>
			<Meta title={config.title} />
			<IndexPage>
				<section className='flex flex-col items-center'>
					<article className='mb-4'>
						<h1 className='font-semibold text-2xl text-center'>
							{config.title}
						</h1>
						<p className='text-gray-700'>{config.description}</p>
					</article>
					<article className='max-w-md w-full flex flex-col gap-2 items-center rounded-lg bg-white shadow pb-2'>
						<Search
							searchConfig={config}
							updateResults={updateResults}
						/>
						<SearchResults<Response>
							results={results}
							getDescription={getDescription}
						/>
					</article>
				</section>
			</IndexPage>
		</>
	)
}

export default Index

import { useState } from 'react'
import { SearchConfig, SearchProducto } from '../../../interfaces'
import Meta from '../../../components/Meta'
import IndexPage from '../../../components/IndexPage'
import Search from '../../../components/templates/search/Search'
import SearchResults from '../../../components/templates/search/SearchResults'

const searchConfig: SearchConfig = {
	title: 'Productos de Crédito',
	heading: 'Buscar Productos de Crédito',
	description: 'Busca entre los productos de crédito registrados.',
	labels: {
		searchbox: 'Nombre del producto',
		button: 'Producto',
	},
	url: 'busca/productos_credito',
}

const getDescription = (result: SearchProducto) => ({
	idKey: result.cod_producto,
	description: `${result.cod_producto} - ${result.nombre}`,
})

const Index = () => {
	const [results, setResults] = useState<SearchProducto[]>([])

	const updateResults = (results: SearchProducto[]) => {
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
					<Search<SearchProducto>
						searchConfig={searchConfig}
						updateResults={updateResults}
					/>
				</section>
				<SearchResults<SearchProducto>
					results={results}
					getDescription={getDescription}
				/>
			</IndexPage>
		</>
	)
}

export default Index

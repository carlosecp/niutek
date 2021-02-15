import { useState } from 'react'
import { searchConfig, searchProducto } from '../../../types'
import Meta from '../../../components/Meta'
import IndexPage from '../../../components/layout/IndexPage'
import Search from '../../../components/templates/search/Search'
import SearchResults from '../../../components/templates/search/SearchResults'

const searchConfig: searchConfig = {
	title: 'Productos de Crédito',
	heading: 'Buscar Productos de Crédito',
	description: 'Busca entre los productos de crédito registrados.',
	labels: {
		searchbox: 'Nombre del producto',
		button: 'Producto',
	},
	url: 'busca/productos_credito',
}

const getDescription = (result: searchProducto) => ({
	idKey: result.cod_producto,
	description: `${result.cod_producto} - ${result.nombre}`,
})

const Index = () => {
	const [results, setResults] = useState<searchProducto[]>([])

	const updateResults = (results: searchProducto[]) => {
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
					<Search<searchProducto>
						searchConfig={searchConfig}
						updateResults={updateResults}
					/>
				</section>
				<SearchResults<searchProducto>
					results={results}
					getDescription={getDescription}
				/>
			</IndexPage>
		</>
	)
}

export default Index

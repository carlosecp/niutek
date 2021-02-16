import type { SearchConfig, SearchResProducto } from '../../../../types/search'
import { useState } from 'react'
import Meta from '../../../Meta'
import IndexPage from '../../../layout/IndexPage'
import Search from '../../../templates/search/Search'
import SearchResults from '../../../templates/search/SearchResults'

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

const getDescription = (result: SearchResProducto) => ({
	idKey: result.cod_producto,
	description: `${result.cod_producto} - ${result.nombre}`,
})

const ProductosCreditoIndex = () => {
	const [results, setResults] = useState<SearchResProducto[]>([])

	const updateResults = (results: SearchResProducto[]) => {
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
					<Search<SearchResProducto>
						searchConfig={searchConfig}
						updateResults={updateResults}
					/>
					hCsear
				</section>
				<SearchResults<SearchResProducto>
					results={results}
					getDescription={getDescription}
				/>
			</IndexPage>
		</>
	)
}

export default ProductosCreditoIndex

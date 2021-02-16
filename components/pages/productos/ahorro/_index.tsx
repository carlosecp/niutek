import type { SearchConfig, SearchResProducto } from '../../../../interfaces/search'
import { useState } from 'react'
import Meta from '../../../Meta'
import IndexPage from '../../../layout/IndexPage'
import Search from '../../../templates/search/Search'
import SearchResults from '../../../templates/search/SearchResults'

const config: SearchConfig = {
	title: 'Productos de Ahorro',
	heading: 'Buscar Productos de Ahorro',
	description: 'Busca entre los productos de ahorro registrados.',
	labels: {
		searchbox: 'Nombre del producto',
		button: 'Producto',
	},
	url: 'busca/productos_ahorro',
}

const getDescription = (result: SearchResProducto) => ({
	idKey: result.cod_producto,
	description: `${result.cod_producto} - ${result.nombre}`,
})

const ProductosAhorroIndex = () => {
	const [results, setResults] = useState<SearchResProducto[]>([])

	const updateResults = (results: SearchResProducto[]) => {
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
					<Search<SearchResProducto>
						searchConfig={config}
						updateResults={updateResults}
					/>
				</section>
				<SearchResults<SearchResProducto>
					results={results}
					getDescription={getDescription}
				/>
			</IndexPage>
		</>
	)
}

export default ProductosAhorroIndex

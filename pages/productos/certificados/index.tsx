import { useState } from 'react'
import { searchConfig, searchProducto } from '../../../types'
import Meta from '../../../components/Meta'
import IndexPage from '../../../components/layout/IndexPage'
import Search from '../../../components/templates/search/Search'
import SearchResults from '../../../components/templates/search/SearchResults'

const config: searchConfig = {
	title: 'Productos de Certificado a plazo fijo',
	heading: 'Buscar Productos de Certificados a plazo fijo',
	description:
		'Busca entre los productos de certificados a plazo fijo registrados.',
	labels: {
		searchbox: 'Nombre del producto',
		button: 'Producto',
	},
	url: 'busca/productos_certificado',
}

const getDescription = (result: searchProducto) => ({
	idKey: result.cod_producto,
	description: `${result.cod_producto} - ${result.nombre}`,
})

const index = () => {
	const [results, setResults] = useState<searchProducto[]>([])

	const updateResults = (results: searchProducto[]) => {
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
					<Search<searchProducto>
						searchConfig={config}
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

export default index

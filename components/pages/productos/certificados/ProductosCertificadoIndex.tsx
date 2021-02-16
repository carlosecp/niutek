import type { SearchConfig, SearchResProducto } from '../../../../types/search'
import { useState } from 'react'
import Meta from '../../../Meta'
import IndexPage from '../../../layout/IndexPage'
import Search from '../../../templates/search/Search'
import SearchResults from '../../../templates/search/SearchResults'

const searchConfig: SearchConfig = {
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

const getDescription = (result: SearchResProducto) => ({
	idKey: result.cod_producto,
	description: `${result.cod_producto} - ${result.nombre}`,
})

const ProductosCertificadosIndex = () => {
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
				</section>
				<SearchResults<SearchResProducto>
					results={results}
					getDescription={getDescription}
				/>
			</IndexPage>
		</>
	)
}

export default ProductosCertificadosIndex

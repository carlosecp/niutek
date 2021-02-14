import Meta from '../../../components/Meta'
import PageIndex from '../../../components/page_index/PageIndex'
import { SearchType } from '../../../interfaces/layout'

const searchConfig: SearchType = {
	title: 'Persona Natural',
	heading: 'Buscar Cliente Persona Natural',
	description: 'Busca entre los clientes persona natural registrados.',
	labels: {
		searchbox: 'Nombre del cliente',
		button: 'Cliente',
	},
	url: 'busca/clientes_natural',
}

const index = () => {
	return (
		<>
			<Meta title={searchConfig.title} />
			<PageIndex searchConfig={searchConfig} />
		</>
	)
}

export default index

import Meta from '../../../components/Meta'
import PageIndex from '../../../components/page_index/PageIndex'
import { SearchType } from '../../../interfaces/layout'

const searchConfig: SearchType = {
	title: 'Persona Jurídica',
	heading: 'Buscar Cliente Persona Jurídica',
	description: 'Busca entre los clientes persona jurídica registrados.',
	labels: {
		searchbox: 'Nombre del cliente',
		button: 'Cliente',
	},
	url: 'busca/persona_juridica',
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

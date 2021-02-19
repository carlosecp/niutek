import type { SearchResult, Data, ValidationSchema } from './data/index'
import * as React from 'react'
import axios from 'axios'
import { initialValues } from './data'
import {
	PersonaNatural,
	DatosProfesionales,
	OrigenFondos,
	RefComerciales,
	RefBancarias,
} from './sections'
import Form from '../../../../templates/forms/Form'
import { Navbar, Navigation, Search, Results } from '../../../../layout'

// Funcion utilizada para determinar que informcion mostrar en la lista de busqueda, ya que cada tipo de busqueda tiene retornos diferentes. El componente que recibe esto es <Navigation>
const getDescription = (result: SearchResult) => ({
	accessor: result.cod_cliente,
	description: `${result.nombres} ${result.apellidos}`,
})

const navLinks = [
	{ name: 'Persona Natural', anchor: '_persona_natural' },
	{ name: 'Datos Profesionales', anchor: '_datos_profesionales' },
	{ name: 'Origen de Fondos', anchor: '_origen_fondos' },
	{ name: 'Referencias Comerciales', anchor: '_referencias_comerciales' },
	{ name: 'Referencias Bancarias', anchor: '_referencias_bancarias' },
	{ name: 'Referencias Personales', anchor: '_referencias_personales' },
]

// & Me falta tipar las options
const Index = ({ options }) => {
	const [showNavigation, setShowNavigation] = React.useState(false)
	const [searchResults, setSearchResults] = React.useState<SearchResult[]>([])

	// Este state (data) es el que contiene los valores que se encuentran actualmente en el formulario. Estos pueden cambiar. Proe defecto se utilizan los valores por defecto, pero cuando se carga un cliente/producto/cheque, etc... se actualizan.
	const [data, setData] = React.useState<Data>(initialValues.values)
	const [loading, setLoading] = React.useState(false)

	// Funcion encargada de actualizar (data). Esta no se como abstraerla asi rapido sin pensarla, porque el problema es que necesitamos el accessor.
	// Por ejemplo: Cuando le damos click a un cliente para buscar sus datos, necesitamos identificar a que cliente es, y para eso se le envia una llave al back con el accessor del item a buscar, pero con la llave correspodiente al tipo de busqueda que se hace. Asi por ejemplo, para buscar un cliente natural, requiero de la llave p_cod_cliente, que va a contener el accessor, que tomo directamente de esta funcion, activada al darle click en uno de los items de <Navigation />.
	const getData = async (accessor: string | number) => {
		const req = {
			path: `${process.env.backend}/read/client`,
			body: {
				p_cod_cliente: accessor,
				p_cod_sucursal: 0,
				p_cod_empresa: 1,
			},
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true',
			},
		}

		setLoading(true)

		try {
			const res = await axios.post(req.path, req.body, {
				headers: req.headers,
			})
			setData(res.data)
		} catch (err) {
			console.error('useRequest: ', err)
		}
	}

	const navbarProps = {
		title: 'Persona Natural',
		toggleNavigation: () => setShowNavigation(!showNavigation),
		onReset: () => setData(null), // Funcion que resetea los valores del formulario a los valores por defecto.
	}

	const formProps = {
		values: data,
		validations: initialValues.validations,
	}

	const navigationProps = {
		navLinks,
		showNavigation,
		toggleNavigation: () => setShowNavigation(!showNavigation),
	}

	const searchProps = {
		config: {
			placeholder: 'Buscar persona natural',
			url: '/busca/clientes_natural',
		},
		setSearchResults,
	}

	const resultsProps = {
		results: searchResults,
		getDescription,
		getData,
	}

	return (
		<main className='sm:ml-64 relative bg-light'>
			<Navbar {...navbarProps} />
			<div className='flex lg:pr-64'>
				<Form<Data, ValidationSchema>
					values={data}
					validations={initialValues.validations}
				>
					<PersonaNatural options={options} />
					<DatosProfesionales />
					<OrigenFondos />
					<RefComerciales />
					<RefBancarias options={options} />
					<button type='submit'>Submit</button>
				</Form>
				<Navigation {...navigationProps}>
					<Search<SearchResult> {...searchProps} />
					<Results {...resultsProps} />
				</Navigation>
			</div>
		</main>
	)
}

export default Index

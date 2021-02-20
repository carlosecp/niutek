import type { SearchResult, Data, ValidationSchema } from './data/index'
import * as React from 'react'
import {useRouter} from 'next/router'
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

// Funcion utilizada para determinar que informcion mostrar en la lista de busqueda,
// ya que cada tipo de busqueda tiene retornos diferentes. El componente que recibe esto es <Navigation>
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

interface Props {
	options: { [x: string]: any }[]
}

// & Me falta tipar las options
const Index = (props: Props) => {

	const useIndex = <searchResult, > (key: string) => {
		const [showNavigation, setShowNavigation] = React.useState(false)
		const [searchResults, setSearchResults] = React.useState<searchResult[]>([])
		
		const [data, setData] = React.useState<Data>(initialValues.values)
		const [loading, setLoading] = React.useState(false)
		const router = useRouter()
		const getData = async (accessor: string | number) => {
			const req = {
				path: `${process.env.backend}/read/client`,
				body: {
					[key]: accessor,
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
		return {
			showNavigation, setShowNavigation, searchResults, setSearchResults,
			data, setData, loading, setLoading, getData
		}
	}

	const {
			showNavigation, setShowNavigation, searchResults, setSearchResults,
			data, setData, loading, setLoading, getData
	} = useIndex('p_cod_cliente')


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
					<PersonaNatural options={props.options} />
					<DatosProfesionales />
					<OrigenFondos />
					<RefComerciales />
					<RefBancarias options={props.options} />
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

import type {
	PersonaNaturalResult,
	SearchConfig,
} from '../../../../interfaces/search'
import { useState, useEffect } from 'react'
import axios from 'axios'
import defaults from '../../../../data/clientes/persona_natural/_data'
import DatosProfesionales from './DatosProfesionales'
import OrigenFondos from './OrigenFondos'
import Form from '../../../templates/forms/Form'
import RefComerciales from './RefComerciales'
import RefBancarias from './RefBancarias'
import Navbar from '../../../layout/Navbar'
import Navigation from '../../../templates/search/Navigation'
import PersonaNatural from './PersonaNatural'

export type Values = typeof defaults.values
export type Validations = typeof defaults.validations

const config: SearchConfig = {
	placeholder: 'Buscar persona natural',
	url: 'busca/clientes_natural',
}

const getDescription = (result: PersonaNaturalResult) => ({
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
	const [showNavigation, setShowNavigation] = useState(false)
	const toggleNavigation = () => {
		setShowNavigation(!showNavigation)
	}

	const [searchResults, setSearchResults] = useState<PersonaNaturalResult[]>(
		[]
	)
	const updateResults = (results: PersonaNaturalResult[]) => {
		console.log(results)
		setSearchResults(results)
	}

	const [data, setData] = useState<Values>()
	const [loading, setLoading] = useState(false)

	const getData = async (accessor: string | number) => {
		console.log(accessor)

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

	useEffect(() => {
		console.log('Data: ', data)
	}, [data])

	return (
		<main className='sm:ml-64 relative bg-light'>
			<Navbar
				title='Persona Natural'
				toggleNavigation={toggleNavigation}
				onReset={() => setData(null)}
			/>
			<div className='flex lg:pr-64'>
				<Form<Values, Validations>
					values={defaults.values}
					data={data}
					validations={defaults.validations}
				>
					<PersonaNatural options={options} />
					<DatosProfesionales />
					<OrigenFondos />
					<RefComerciales />
					<RefBancarias options={options} />
					<button type='submit'>Submit</button>
				</Form>
				<Navigation<PersonaNaturalResult>
					showNavigation={showNavigation}
					toggleNavigation={toggleNavigation}
					getData={getData}
					navLinks={navLinks}
					config={config}
					updateResults={updateResults}
					results={searchResults}
					getDescription={getDescription}
				/>
			</div>
		</main>
	)
}

export default Index

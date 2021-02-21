import type { SearchResult, Data, ValidationSchema } from './data/index'
import * as React from 'react'
import useIndex from '../../../../../hooks/useIndex'
import { initialValues, navLinks, getDescription } from './data'
import {
	PersonaNatural,
	DatosProfesionales,
	OrigenFondos,
	RefComerciales,
	RefBancarias,
	RefPersonales
} from './sections'
import { Navbar, Navigation, Search, Results } from '../../../../layout'
import Form from '../../../../templates/forms/Form'

interface Props {
	options: { [x: string]: any }[]
}

const Index = (props: Props) => {
	const state = useIndex<SearchResult, Data>({
		url: {
			fetch: 'datos_cliente_natural',
			write: 'cliente_natural'
		},
		key: 'p_cod_cliente',
		initialValues: initialValues.values
	})

	const navbarProps = {
		title: 'Persona Natural',
		loading: state.loading,
		setEditingExisting: state.setEditingExisting,
		toggleNavigation: () => state.setShowNavigation(!state.showNavigation),
		onReset: () => state.setData(initialValues.values) // Funcion que resetea los valores del formulario a los valores por defecto.
	}

	const formProps = {
		values: state.data,
		validations: initialValues.validations,
		writeData: state.writeData
	}

	const navigationProps = {
		navLinks,
		showNavigation: state.showNavigation,
		toggleNavigation: () => state.setShowNavigation(!state.showNavigation)
	}

	const searchProps = {
		config: {
			placeholder: 'Buscar persona natural',
			url: '/busca/clientes_natural'
		},
		setSearchResults: state.setSearchResults,
		loading: state.loading,
		setLoading: state.setLoading
	}

	const resultsProps = {
		results: state.searchResults,
		loading: state.loading,
		getDescription,
		getData: state.getData
	}

	return (
		<main className="sm:ml-64 relative bg-light">
			<Navbar {...navbarProps} />
			<div className="flex lg:pr-64">
				<Form<Data, ValidationSchema> {...formProps}>
					<PersonaNatural options={props.options} />
					<DatosProfesionales />
					<OrigenFondos />
					<RefComerciales />
					<RefBancarias options={props.options} />
					<RefPersonales options={props.options} />
					<button type="submit" disabled={state.loading}>
						Submit
					</button>
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

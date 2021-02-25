import type {
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
} from './data/index'
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
	const state = useIndex<PersonaNaturalValues, PersonaNaturalSearchResult>({
		key: 'p_cod_cliente',
		initialValues: initialValues.values,
		url: {
			fetch: 'datos_cliente_natural',
			write: 'cliente_natural'
		}
	})

	const navbarProps = {
		loading: state.loading,
		title: 'Persona Natural',
		onReset: () => state.setData(initialValues.values),
		setEditingExisting: state.setEditingExisting,
		toggleNavigation: () => state.setShowNavigation(!state.showNavigation)
	}

	const formProps = {
		accessKey: 'p_cod_cliente',
		currentId: state.currentId,
		validations: initialValues.validations,
		values: state.data,
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
		loading: state.loading,
		setLoading: state.setLoading,
		setSearchResults: state.setSearchResults
	}

	const resultsProps = {
		loading: state.loading,
		results: state.searchResults,
		getData: state.getData,
		getDescription,
		setCurrentId: state.setCurrentId
	}

	return (
		<main className='sm:ml-64 relative bg-light'>
			<Navbar {...navbarProps} />
			<div className='flex lg:pr-64'>
				<Form<PersonaNaturalValues, PersonaNaturalValidationSchema>
					{...formProps}
				>
					<PersonaNatural options={props.options} />
					<DatosProfesionales />
					<OrigenFondos />
					<RefComerciales />
					<RefBancarias options={props.options} />
					<RefPersonales options={props.options} />
					<button type='submit' disabled={state.loading}>
						Submit
					</button>
				</Form>
				<Navigation {...navigationProps}>
					<Search<PersonaNaturalSearchResult> {...searchProps} />
					<Results {...resultsProps} />
				</Navigation>
			</div>
		</main>
	)
}

export default Index

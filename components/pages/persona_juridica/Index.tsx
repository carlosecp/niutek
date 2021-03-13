import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import type {
	PersonaJuridicaValues,
	PersonaJuridicaValidationSchema,
	PersonaJuridicaSearchResult
} from '@/data/persona_juridica'
import * as React from 'react'
import useIndex from '@/lib/useIndex'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/persona_juridica'
import {
	PersonaJuridica,
	OrigenFondos,
	RefComerciales,
	RefBancarias,
	Proveedores
} from './components'
import { Navbar, Navigation, Search, Results, Alerts } from '@/layouts/index'
import Form from '@/components/forms'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const Index = (props: Props) => {
	const state = useIndex<PersonaJuridicaValues, PersonaJuridicaSearchResult>({
		key: 'p_cod_cliente',
		initialValues: initialValues.values,
		url: {
			fetch: 'datos_cliente_juridico',
			write: 'cliente_juridico'
		}
	})

	const navbarProps = {
		loading: state.loading,
		title: 'Persona Jurídica',
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
			placeholder: 'Buscar persona jurídica',
			url: 'busca/clientes_juridico'
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
			<div className='flex flex-col py-4 lg:pr-64'>
				<Alerts alerts={state.alerts} closeAlert={state.closeAlert} />
				<Form<PersonaJuridicaValues, PersonaJuridicaValidationSchema>
					{...formProps}
				>
					<PersonaJuridica options={props.options} />
					<OrigenFondos />
					<RefComerciales />
					<RefBancarias options={props.options} />
					<Proveedores options={props.options} />
					<button
						type='submit'
						className='btn btn-primary'
						disabled={state.loading}
					>
						Submit
					</button>
				</Form>
				<Navigation {...navigationProps}>
					<Search<PersonaJuridicaSearchResult> {...searchProps} />
					<Results {...resultsProps} />
				</Navigation>
			</div>
		</main>
	)
}

export default Index

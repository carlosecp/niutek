import * as React from 'react'
import type {
	TablaOptions,
	DeptosOption,
	GlobalValues,
	GlobalSearchResults
} from '@/lib/interfaces'
import useIndex from '@/lib/useIndex'
import { Navbar, Navigation, Search, Results, Alerts } from '@/layouts/index'
import Form from '@/components/forms/Form'

interface Props<Validations> {
	accessKey: string //p_cod_cliente por ejemplo
	endpoint: string
	navLinks: {
		name: string
		anchor: string
	}[]
	getDescription: (
		results: GlobalSearchResults
	) => {
		accessor: string
		description: string
	}
	initialValues: {
		values: GlobalValues
		validations: Validations
	}
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
	children: React.ReactNode
}

const Index = <Validations extends {}>(props: Props<Validations>) => {
	const state = useIndex<GlobalValues, GlobalSearchResults>({
		key: props.accessKey,
		initialValues: props.initialValues.values,
		url: {
			fetch: `datos_${props.endpoint}`,
			write: props.endpoint
		}
	})

	const navbarProps = {
		loading: state.loading,
		title: 'Persona Natural',
		onReset: () => state.setData(props.initialValues.values),
		setEditingExisting: state.setEditingExisting,
		toggleNavigation: () => state.setShowNavigation(!state.showNavigation)
	}

	const formProps = {
		accessKey: props.accessKey,
		currentId: state.currentId,
		validations: props.initialValues.validations,
		values: state.data,
		writeData: state.writeData
	}

	const navigationProps = {
		navLinks: props.navLinks,
		showNavigation: state.showNavigation,
		toggleNavigation: () => state.setShowNavigation(!state.showNavigation)
	}

	const searchProps = {
		config: {
			placeholder: 'Buscar persona natural',
			url: 'busca/clientes_natural'
		},
		loading: state.loading,
		setLoading: state.setLoading,
		setSearchResults: state.setSearchResults
	}

	const resultsProps = {
		loading: state.loading,
		results: state.searchResults,
		getData: state.getData,
		getDescription: props.getDescription,
		setCurrentId: state.setCurrentId
	}

	return (
		<main className='sm:ml-64 relative bg-light'>
			<Navbar {...navbarProps} />
			<div className='flex flex-col py-4 lg:pr-64'>
				<Alerts alerts={state.alerts} closeAlert={state.closeAlert} />
				<Form<GlobalValues, Validations> {...formProps}>
					{props.children}
					<button
						type='submit'
						className='btn btn-primary'
						disabled={state.loading}
					>
						Submit
					</button>
				</Form>
				<Navigation {...navigationProps}>
					<Search<GlobalSearchResults> {...searchProps} />
					<Results {...resultsProps} />
				</Navigation>
			</div>
		</main>
	)
}

export default Index

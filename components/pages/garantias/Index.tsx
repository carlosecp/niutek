import type {
	GarantiasValues,
	GarantiasValidationSchema,
	GarantiasSearchResult
} from '@/data/garantias/index'
import type { TablaOptions, DeptosOption } from '@/lib/interfaces'
import * as React from 'react'
import useIndex from '@/lib/useIndex'
import { initialValues, navLinks, getDescription } from '@/data/garantias'
import { Navbar, Navigation, Search, Results, Alerts } from '@/layouts/index'
import Form from '@/components/forms'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const index = (props: Props) => {
	const state = useIndex<GarantiasValues, GarantiasSearchResult>({
		key: 'p_cod_cliente',
		initialValues: initialValues.values,
		url: {
			fetch: 'datos_cliente_natural',
			write: 'cliente_natural'
		}
	})

	const navbarProps = {
		loading: state.loading,
		title: 'Garantías',
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
		getDescription,
		setCurrentId: state.setCurrentId
	}

	return (
		<main className='sm:ml-64 relative bg-light'>
			<Navbar {...navbarProps} />
			<div className='flex flex-col py-4 lg:pr-64'>
				<Alerts alerts={state.alerts} closeAlert={state.closeAlert} />
				<Form<GarantiasValues, GarantiasValidationSchema> {...formProps}>
					<Garantias options={props.options} />
					<button
						type='submit'
						className='btn btn-primary'
						disabled={state.loading}
					>
						Submit
					</button>
				</Form>
				<Navigation {...navigationProps}>
					<Search<GarantiasSearchResult> {...searchProps} />
					<Results {...resultsProps} />
				</Navigation>
			</div>
		</main>
	)
}

export default index

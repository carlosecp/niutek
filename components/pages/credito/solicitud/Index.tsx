import type { DeptosOption, TablaOptions } from '../../../../interfaces'
import type {
	SolicitudDeCreditoValues,
	SolicitudDeCreditoValidationSchema,
	SolicitudDeCreditoSearchResult
} from './data/index'
import * as React from 'react'
import useIndex from '../../../../hooks/useIndex'
import { initialValues, navLinks, getDescription } from './data'
import { Navbar, Navigation, Search, Results } from '../../../layout'
import Form from '../../../templates/forms/Form'
import { Garantias, Solicitud } from './components'
import Alerts from '../../../layout/Alerts'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const Index = (props: Props) => {
	const state = useIndex<
		SolicitudDeCreditoValues,
		SolicitudDeCreditoSearchResult
	>({
		key: 'p_cod_producto',
		initialValues: initialValues.values,
		url: {
			fetch: 'datos_solicitud_credito',
			write: 'solicitud_credito'
		}
	})

	const navbarProps = {
		loading: state.loading,
		title: 'Solicitud de Crédito',
		onReset: () => state.setData(initialValues.values),
		setEditingExisting: state.setEditingExisting,
		toggleNavigation: () => state.setShowNavigation(!state.showNavigation)
	}

	const formProps = {
		accessKey: 'p_cod_producto',
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
			placeholder: 'Buscar producto',
			url: 'busca/productos_credito'
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
				<Form<SolicitudDeCreditoValues, SolicitudDeCreditoValidationSchema>
					{...formProps}
				>
					<Solicitud options={props.options} />
					<Garantias />
					<button
						type='submit'
						className='btn btn-primary'
						disabled={state.loading}
					>
						Submit
					</button>
				</Form>
				<Navigation {...navigationProps}>
					<Search<SolicitudDeCreditoSearchResult> {...searchProps} />
					<Results {...resultsProps} />
				</Navigation>
			</div>
		</main>
	)
}

export default Index

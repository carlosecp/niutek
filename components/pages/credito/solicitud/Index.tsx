import type { DeptosOption, TablaOptions } from '../../../../lib/interfaces'
import type {
	SolicitudDeCreditoValues,
	SolicitudDeCreditoValidationSchema,
	SolicitudDeCreditoSearchResult
} from '../../../../data/solicitud_credito/index'
import * as React from 'react'
import useIndex from '../../../../lib/useIndex'
import {
	initialValues,
	navLinks,
	getDescription
} from '../../../../data/solicitud_credito'
import { Navbar, Navigation, Search, Results } from '../../../../layout'
import Alerts from '../../../../layout/Alerts'
import Form from '../../../forms/Form'
import { SolicitudDeCredito, Garantias, Observaciones } from './components'

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
					<SolicitudDeCredito options={props.options} />
					<Garantias options={props.options} />
					<Observaciones />
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

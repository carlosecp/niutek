import type { DeptosOption, TablaOptions } from '@/lib/interfaces'
import type {
	FormalizacionDeCreditoValues,
	FormalizacionDeCreditoValidationSchema,
	FormalizacionDeCreditoSearchResult
} from '@/data/formalizacion_credito/index'
import * as React from 'react'
import useIndex from '@/lib/useIndex'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/formalizacion_credito'
import { Navbar, Navigation, Search, Results, Alerts } from '@/layouts/index'
import Form from '@/components/forms'
import { FormalizacionDeCredito, Cargos } from './components'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const Index = (props: Props) => {
	const state = useIndex<
		FormalizacionDeCreditoValues,
		FormalizacionDeCreditoSearchResult
	>({
		key: 'p_cod_producto',
		initialValues: initialValues.values,
		url: {
			fetch: 'datos_formalizacion_credito',
			write: 'formalizacion_credito'
		}
	})

	const navbarProps = {
		loading: state.loading,
		title: 'Formalización de Crédito',
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
			url: 'busca/formalizacion_credito'
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
				<Form<
					FormalizacionDeCreditoValues,
					FormalizacionDeCreditoValidationSchema
				>
					{...formProps}
				>
					<FormalizacionDeCredito options={props.options} />
					<Cargos options={props.options} />
					<button
						type='submit'
						className='btn btn-primary'
						disabled={state.loading}
					>
						Submit
					</button>
				</Form>
				<Navigation {...navigationProps}>
					<Search<FormalizacionDeCreditoSearchResult> {...searchProps} />
					<Results {...resultsProps} />
				</Navigation>
			</div>
		</main>
	)
}

export default Index

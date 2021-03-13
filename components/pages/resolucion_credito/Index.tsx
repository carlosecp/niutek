import type { DeptosOption, TablaOptions } from '@/lib/interfaces'
import type {
	ResolucionDeCreditoValues,
	ResolucionDeCreditoValidationSchema,
	ResolucionDeCreditoSearchResult
} from '@/data/resolucion_credito/index'
import { Garantias, ResolucionDeCredito, Observaciones } from './components'
import * as React from 'react'
import useIndex from '@/lib/useIndex'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/resolucion_credito'
import { Navbar, Navigation, Search, Results, Alerts } from '@/layouts/index'
import Form from '@/components/forms'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const Index = (props: Props) => {
	const state = useIndex<
		ResolucionDeCreditoValues,
		ResolucionDeCreditoSearchResult
	>({
		key: 'p_cod_producto',
		initialValues: initialValues.values,
		url: {
			fetch: 'datos_producto_credito',
			write: 'producto_credito'
		}
	})

	const navbarProps = {
		loading: state.loading,
		title: 'Resolucion de Crédito',
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
				<Form<ResolucionDeCreditoValues, ResolucionDeCreditoValidationSchema>
					{...formProps}
				>
					{/*
					<PersonaNatural options={props.options} />
					<DatosProfesionales />
					<OrigenFondos />
					<RefComerciales />
					<RefBancarias options={props.options} />
					<RefPersonales options={props.options} />
					*/}
					<ResolucionDeCredito options={props.options} />
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
					<Search<ResolucionDeCreditoSearchResult> {...searchProps} />
					<Results {...resultsProps} />
				</Navigation>
			</div>
		</main>
	)
}

export default Index

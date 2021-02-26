import type { DeptosOption, TablaOptions } from '../../../../../interfaces'
import type {
	ProductoDeCreditoValues,
	ProductoDeCreditoValidationSchema,
	ProductoDeCreditoSearchResult
} from './data/index'
import * as React from 'react'
import useIndex from '../../../../../hooks/useIndex'
import { initialValues, navLinks, getDescription } from './data'
import { Navbar, Navigation, Search, Results } from '../../../../layout'
import Form from '../../../../templates/forms/Form'

interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
}

const Index = (props: Props) => {
	const state = useIndex<
		ProductoDeCreditoValues,
		ProductoDeCreditoSearchResult
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
		title: 'Solicitud de Credito',
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
			{' '}
			<Navbar {...navbarProps} />{' '}
			<div className='flex lg:pr-64'>
				<Form<ProductoDeCreditoValues, ProductoDeCreditoValidationSchema>
					{...formProps}
				>
					<button
						type='submit'
						className='btn btn-primary'
						disabled={state.loading}
					>
						Submit
					</button>
				</Form>
				<Navigation {...navigationProps}>
					<Search<ProductoDeCreditoSearchResult> {...searchProps} />
					<Results {...resultsProps} />
				</Navigation>
			</div>
		</main>
	)
}

export default Index

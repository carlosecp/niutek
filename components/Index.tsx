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

export interface Config<Values, Validations, searchResult> {
	pageType: string
	pageName: string
	navBarTitle?: string
	navLinks: {
		name: string
		anchor: string
	}[]
	initialValues: {
		values: Values
		validations: Validations
	}
	getDescription: (
		results: searchResult
	) => {
		accessor: number
		description: string
	}
}

export interface Props {
	options: {
		tabla: TablaOptions
		deptos_municipios: DeptosOption[]
	}
	children: React.ReactNode
}

export const Index = <
	Values extends GlobalValues,
	Validations extends {},
	SearchResult extends GlobalSearchResults
>(
	args: Config<Values, Validations, SearchResult>
) => {
	const accessKey = `p_cod_${args.pageType}`
	const endpoint = `${args.pageType}_${args.pageName}`
	return (props: Props) => {
		const state = useIndex<Values, SearchResult>({
			key: accessKey,
			initialValues: args.initialValues.values,
			url: {
				fetch: `datos_${args.pageType}_${args.pageName}`,
				write: endpoint
			}
		})

		const navbarProps = {
			loading: state.loading,
			title: args.navBarTitle ? args.navBarTitle : args.navLinks[0].name,
			onReset: () => state.setData(args.initialValues.values),
			setEditingExisting: state.setEditingExisting,
			toggleNavigation: () => state.setShowNavigation(!state.showNavigation)
		}

		const formProps = {
			accessKey: accessKey,
			currentId: state.currentId,
			validations: args.initialValues.validations,
			values: state.data,
			writeData: state.writeData
		}

		const navigationProps = {
			navLinks: args.navLinks,
			showNavigation: state.showNavigation,
			toggleNavigation: () => state.setShowNavigation(!state.showNavigation)
		}

		const searchProps = {
			config: {
				placeholder: 'Buscar persona natural',
				url: `busca/${args.pageType}s_${args.pageName}`
			},
			loading: state.loading,
			setLoading: state.setLoading,
			setSearchResults: state.setSearchResults
		}

		const resultsProps = {
			loading: state.loading,
			results: state.searchResults,
			getData: state.getData,
			getDescription: args.getDescription,
			setCurrentId: state.setCurrentId
		}

		return (
			<main className='sm:ml-64 relative bg-light'>
				<Navbar {...navbarProps} />
				<div className='flex flex-col py-4 lg:pr-64'>
					<Alerts alerts={state.alerts} closeAlert={state.closeAlert} />
					<Form<Values, Validations> {...formProps}>
						{props.children}
						<button
							type='submit'
							className='btn btn-primary'
							disabled={state.loading}
						>
							Submit
						</button>{' '}
					</Form>
					<Navigation {...navigationProps}>
						<Search<SearchResult> {...searchProps} />
						<Results {...resultsProps} />
					</Navigation>
				</div>
			</main>
		)
	}
}

export default Index

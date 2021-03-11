import type {
	TablaOptions,
	DeptosOption,
	GlobalSearchResults
} from '@/lib/interfaces'
import type {
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
} from '@/data/persona_natural'
import * as React from 'react'
import useIndex from '@/lib/useIndex'
import { initialValues, navLinks, getDescription } from '@/data/persona_natural'
import {
	PersonaNatural,
	DatosProfesionales,
	OrigenFondos,
	RefComerciales,
	RefBancarias,
	RefPersonales
} from './components'
import { Navbar, Navigation, Search, Results, Alerts } from '@/layouts/index'
import Form from '@/components/forms/Form'
import type { Props, Config } from '@/components/Index'
import { Index } from '@/components/Index'

interface Options {}

const personaNaturalConfig: Config<
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
> = {
	accessKey: 'p_cod_cliente',
	endpoint: 'persona_natural',
	navLinks,
	getDescription,
	initialValues
}
const Wrapper = Index<
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
>(personaNaturalConfig)

const pnIndex = (props: Props) => {
	return (
		<Wrapper {...props}>
			<PersonaNatural options={props.options} />
			<DatosProfesionales />
			<OrigenFondos />
			<RefComerciales />
			<RefBancarias options={props.options} />
			<RefPersonales options={props.options} />
		</Wrapper>
	)
}
/*
const Index = (props: Props<PersonaNaturalValidationSchema>) => {
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
				<Form<PersonaNaturalValues, PersonaNaturalValidationSchema>
					{...formProps}
				>
					<PersonaNatural options={props.options} />
					<DatosProfesionales />
					<OrigenFondos />
					<RefComerciales />
					<RefBancarias options={props.options} />
					<RefPersonales options={props.options} />
					<button
						type='submit'
						className='btn btn-primary'
						disabled={state.loading}
					>
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
*/
export default pnIndex

import type {
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
} from '@/data/persona_natural'
import * as React from 'react'
import useForm from '@/lib/hooks/useForm'
import useSearch from '@/lib/hooks/useSearch'
import { initialValues, navLinks, getDescription } from '@/data/persona_natural'
import FormPage from '@/components/FormPage'
import Search from '@/layouts/NewSearch'
import Results from '@/layouts/NewResults'

interface Props {
	children: React.ReactNode
}

const index = (props: Props) => {
	const search = useSearch<PersonaNaturalSearchResult>({
		endpoint: 'clientes_natural'
	})
	const state = useForm<PersonaNaturalValues>({
		initialValues: initialValues.values,
		endpoints: {
			read: '',
			write: ''
		}
	})

	const NavigationChildren = (
		<>
			<Search
				placeholder='testing'
				loading={state.loading}
				callback={(searchValue: string) => {
					state.setLoading(true)
					search.getResults({
						searchValue
					})
					state.setLoading(false)
				}}
			/>
			<Results<PersonaNaturalSearchResult>
				results={search.results}
				loading={state.loading}
				getDescription={getDescription}
				callback={(accessor: string | number) => {
					state.getValues({
						extraKeys: {
							p_cod_cliente: accessor
						}
					})
					state.setCurrent(true)
				}}
			/>
		</>
	)

	return (
		<FormPage<PersonaNaturalValues, PersonaNaturalValidationSchema>
			form={{
				values: state.values,
				validations: initialValues.validations,
				writeData: (values: PersonaNaturalValues) => {
					state.writeValues(values)
				}
			}}
			navigation={{
				children: NavigationChildren,
				navLinks
			}}
			navbar={{
				title: 'Test Page',
				loading: state.loading,
				onReset: state.reset,
				setEditingExisting: state.setCurrent
			}}
		>
			{props.children}
		</FormPage>
	)
}

export default index

import type { Values, Validations, SearchResult } from '@/data/persona_juridica'
import * as React from 'react'
import useForm from '@/lib/hooks/useForm'
import useSearch from '@/lib/hooks/useSearch'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/persona_juridica'
import Index from '@/components/Index'

interface Props {
	children: React.ReactNode
}

const index = (props: Props) => {
	const state = useForm<Values>({
		initialValues: initialValues.values,
		endpoints: {
			read: 'datos_cliente_juridico',
			write: 'cliente_juridico'
		}
	})
	const search = useSearch<SearchResult>({
		endpoint: 'clientes_juridico',
		loading: state.loading,
		setLoading: state.setLoading
	})

	const defaultFormProps = state.getDefaultProps<Validations>({
		validations: initialValues.validations,
		navLinks,
		navbarTitle: 'Persona Jurídica'
	})

	const defaultSearchProps = search.getDefaultProps({
		searchBarPlaceholder: 'Buscar persona jurídica',
		getDescription,
		callback: (accessor: string | number) => {
			state.getValues({
				extraKeys: {
					p_cod_cliente: accessor
				}
			})
		},
		setEditing: state.setEditing
	})

	return (
		<Index<
			PersonaJuridicaValues,
			PersonaJuridicaValidationSchema,
			PersonaJuridicaSearchResult
		>
			form={defaultFormProps.form}
			navigation={{
				navLinks
			}}
			navbar={defaultFormProps.navbar}
			search={defaultSearchProps.search}
			results={defaultSearchProps.results}
		>
			{props.children}
		</Index>
	)
}

export default index

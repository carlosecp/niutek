import type {
	Values,
	Validations,
	SearchResults
} from '@/data/persona_juridica'
import * as React from 'react'
import useForm from '@/lib/hooks/useForm'
import useSearch from '@/lib/hooks/useSearch'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/persona_juridica'
import Index from '@/components/Index'
import useAlerts from '@/lib/hooks/useAlerts'

interface Props {
	children: React.ReactNode
}

const index = (props: Props) => {
	const alerts = useAlerts()
	const state = useForm<Values>({
		initialValues: initialValues.values,
		endpoints: {
			read: 'datos_cliente_juridico',
			write: 'cliente_juridico'
		},
		addAlert: alerts.add
	})
	const search = useSearch<SearchResults>({
		endpoint: 'clientes_juridico',
		loading: state.loading,
		setLoading: state.setLoading
	})

	const defaultFormProps = state.getDefaultProps<Values, Validations>({
		validations: initialValues.validations,
		navLinks,
		navbarTitle: 'Persona Jurídica',
		writeValues: (values: Values) => {
			state.writeValues(values, {
				extraKeys: { p_clase_persona: 1, p_cod_cliente: state.currentId }
			})
		}
	})

	const defaultSearchProps = search.getDefaultProps({
		searchBarPlaceholder: 'Buscar persona jurídica',
		getDescription,
		resultsCallback: (accessor: string | number) => {
			state.getValues(accessor, {
				extraKeys: {
					p_cod_cliente: accessor
				}
			})
		},
		setEditing: state.setEditing
	})

	return (
		<Index<Values, Validations, SearchResults>
			form={defaultFormProps.form}
			navigation={{
				navLinks
			}}
			navbar={defaultFormProps.navbar}
			search={defaultSearchProps.search}
			results={defaultSearchProps.results}
			alerts={alerts}
		>
			{props.children}
		</Index>
	)
}

export default index

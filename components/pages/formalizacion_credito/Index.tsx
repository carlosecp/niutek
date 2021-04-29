import type {
	Values,
	Validations,
	SearchResults
} from '@/data/formalizacion_credito/index'
import * as React from 'react'
import useForm from '@/lib/hooks/useForm'
import useSearch from '@/lib/hooks/useSearch'
import useAlerts from '@/lib/hooks/useAlerts'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/formalizacion_credito'
import Index from '@/components/Index'

interface Props {
	children: React.ReactNode
}
const index = (props: Props) => {
	const alerts = useAlerts()
	const state = useForm<Values>({
		initialValues: initialValues.values,
		endpoints: {
			read: 'datos_formalizacion_credito',
			write: 'formalizacion_credito'
		},
		addAlert: alerts.add
	})

	const search = useSearch<SearchResults>({
		endpoint: 'formalizacion_credito',
		loading: state.loading,
		setLoading: state.setLoading
	})

	const defaultFormProps = state.getDefaultProps<Values, Validations>({
		validations: initialValues.validations,
		navLinks,
		navbarTitle: 'Formalizaciones',
		writeValues: (values: Values) => {
			state.writeValues(values, {})
		}
	})

	const defaultSearchProps = search.getDefaultProps({
		searchBarPlaceholder: 'Buscar formalización',
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

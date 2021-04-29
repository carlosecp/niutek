import type { Values, Validations, SearchResults } from '@/data/garantias/index'
import * as React from 'react'
import useForm from '@/lib/hooks/useForm'
import useSearch from '@/lib/hooks/useSearch'
import useAlerts from '@/lib/hooks/useAlerts'
import { initialValues, navLinks, getDescription } from '@/data/garantias'
import Index from '@/components/Index'

interface Props {
	children: React.ReactNode
}
const index = (props: Props) => {
	const alerts = useAlerts()
	const state = useForm<Values>({
		initialValues: initialValues.values,
		endpoints: {
			read: 'datos_garantia_cliente',
			write: 'garantia_cliente'
		},
		addAlert: alerts.add
	})

	const search = useSearch<SearchResults>({
		endpoint: 'garantia_cliente',
		loading: state.loading,
		setLoading: state.setLoading
	})

	const defaultFormProps = state.getDefaultProps<Values, Validations>({
		validations: initialValues.validations,
		navLinks,
		navbarTitle: 'Garantias',
		writeValues: (values: Values) => {
			state.writeValues(values, {})
		}
	})

	const defaultSearchProps = search.getDefaultProps({
		searchBarPlaceholder: 'Buscar garantias',
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

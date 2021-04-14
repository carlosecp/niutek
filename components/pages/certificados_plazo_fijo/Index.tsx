import type {
	Values,
	Validations,
	SearchResults
} from '@/data/certificados_plazo_fijo'
import * as React from 'react'
import useForm from '@/lib/hooks/useForm'
import useSearch from '@/lib/hooks/useSearch'
import {
	initialValues,
	navLinks,
	getDescription
} from '@/data/certificados_plazo_fijo'
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
			read: 'producto_certificado',
			write: 'producto_certificado'
		},
		addAlert: alerts.add
	})
	const search = useSearch<SearchResults>({
		endpoint: 'productos_certificado',
		loading: state.loading,
		setLoading: state.setLoading
	})

	const defaultFormProps = state.getDefaultProps<Values, Validations>({
		validations: initialValues.validations,
		navLinks,
		navbarTitle: 'Certificados a Plazo Fijo',
		writeValues: (values: Values) => {
			state.writeValues(values, {
				extraKeys: { p_clase_persona: 1, p_cod_cliente: state.currentId }
			})
		}
	})

	const defaultSearchProps = search.getDefaultProps({
		searchBarPlaceholder: 'Buscar certificado',
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

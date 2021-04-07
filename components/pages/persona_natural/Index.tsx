import type {
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
} from '@/data/persona_natural'
import * as React from 'react'
import useForm from '@/lib/hooks/useForm'
import useSearch from '@/lib/hooks/useSearch'
import { initialValues, navLinks, getDescription } from '@/data/persona_natural'
import Index from '@/components/Index'
import useAlerts from '@/lib/hooks/useAlerts'

interface Props {
	children: React.ReactNode
}

const index = (props: Props) => {
	const alerts = useAlerts()
	const state = useForm<PersonaNaturalValues>({
		initialValues: initialValues.values,
		endpoints: {
			read: 'datos_cliente_natural',
			write: 'cliente_natural'
		},
		addAlert: alerts.add
	})
	const search = useSearch<PersonaNaturalSearchResult>({
		endpoint: 'clientes_natural',
		loading: state.loading,
		setLoading: state.setLoading
	})

	const defaultFormProps = state.getDefaultProps<
		PersonaNaturalValues,
		PersonaNaturalValidationSchema
	>({
		validations: initialValues.validations,
		navLinks,
		navbarTitle: 'Persona Natural',
		writeValues: (values: PersonaNaturalValues) => {
			state.writeValues(values, {
				extraKeys: { p_clase_persona: 1, p_cod_cliente: state.currentId }
			})
		}
	})

	const defaultSearchProps = search.getDefaultProps({
		searchBarPlaceholder: 'Buscar persona natural',
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
		<Index<
			PersonaNaturalValues,
			PersonaNaturalValidationSchema,
			PersonaNaturalSearchResult
		>
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

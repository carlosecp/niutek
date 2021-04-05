import type {
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
} from '@/data/persona_natural'
import * as React from 'react'
import useForm from '@/lib/hooks/useForm'
import useSearch from '@/lib/hooks/useSearch'
import { initialValues, navLinks, getDescription } from '@/data/persona_natural'
import FormPage from '@/components/Index'

interface Props {
	children: React.ReactNode
}

const index = (props: Props) => {
	const state = useForm<PersonaNaturalValues>({
		initialValues: initialValues.values,
		endpoints: {
			read: 'datos_cliente_natural',
			write: 'cliente_natural'
		}
	})
	const search = useSearch<PersonaNaturalSearchResult>({
		endpoint: 'clientes_natural',
		loading: state.loading,
		setLoading: state.setLoading
	})

	const defaultFormProps = state.getDefaultProps<PersonaNaturalValidationSchema>(
		{
			validations: initialValues.validations,
			navLinks,
			navbarTitle: 'Persona Natural'
		}
	)

	const defaultSearchProps = search.getDefaultProps({
		searchBarPlaceholder: 'Buscar persona natural',
		getDescription,
		getValues: state.getValues,
		setCurrent: state.setCurrent
	})

	return (
		<FormPage<
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
		>
			{props.children}
		</FormPage>
	)
}

export default index

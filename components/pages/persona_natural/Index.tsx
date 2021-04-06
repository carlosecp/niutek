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
import { useUser } from '@auth0/nextjs-auth0'

interface Props {
	children: React.ReactNode
}

const index = (props: Props) => {
	const { user, error, isLoading } = useUser()
	console.log(user)

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
		</Index>
	)
}

export default index

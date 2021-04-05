import type {
	PersonaNaturalValues,
	PersonaNaturalValidationSchema,
	PersonaNaturalSearchResult
} from '@/data/persona_natural'
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
	const state = useForm<PersonaNaturalValues>({
		initialValues: initialValues.values
	})
	const search = useSearch<PersonaNaturalSearchResult>()

	const NavigationChildren = (
		<>
			<Search
				placeholder='testing'
				loading={state.loading}
				searchCallback={(x: string) => {
					search.getResults({
						searchValue: x
					})
				}}
			/>
			<Results<PersonaNaturalSearchResult>
				results={search.results}
				loading={state.loading}
				setCurrentId={(x: any) => {}}
				getDescription={getDescription}
				getValues={() => {}}
			/>
		</>
	)

	return (
		<FormPage<PersonaNaturalValues, PersonaNaturalValidationSchema>
			form={{
				values: state.values,
				validations: initialValues.validations,
				writeData: state.writeValues
			}}
			navigation={{
				children: NavigationChildren,
				navLinks
			}}
			navbar={{
				loading: state.loading,
				title: 'Test Page',
				onReset: state.reset,
				setEditingExisting: (x: boolean) => {}
			}}
		>
			{props.children}
		</FormPage>
	)
}

export default index

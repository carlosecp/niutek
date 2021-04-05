import type { GlobalSearchConfig, GlobalSearchResults } from '../lib/interfaces'
import axios from 'axios'
import { Formik } from 'formik'
import { FaSearch } from 'react-icons/fa'

interface Args {
	url: string
	body: { search: string }
}

interface Props<SearchResult> {
	config: GlobalSearchConfig
	placeholder?: string
	setSearchResults: (results: SearchResult[]) => void
	loading: boolean
	setLoading: (x: boolean) => void
}

const Search = <SearchResult extends GlobalSearchResults>(
	props: Props<SearchResult>
) => {
	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting(true)
				props.setLoading(true)

				const results = await axios.post<SearchResult[]>(
					'/api/search',
					{
						searchEndpoint: props.config.url,
						requestBody: values
					},
					{
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Credentials': 'true'
						}
					}
				)

				props.setSearchResults(results.data)

				setSubmitting(false)
				props.setLoading(false)
			}}
		>
			{({ isSubmitting, handleChange, handleSubmit }) => (
				<form
					className='h-14 border-b border-t flex-1 flex items-center'
					onSubmit={handleSubmit}
				>
					<input
						name='search'
						type='text'
						className='w-full border-none outline-none ring-0 focus:ring-0'
						placeholder={props.config.placeholder || `Buscar`}
						onChange={handleChange}
						disabled={isSubmitting || props.loading}
					/>
					<button
						type='submit'
						aria-label='Search'
						className='p-2 disabled:cursor-default disabled:opacity-50 mr-2'
						disabled={isSubmitting || props.loading}
					>
						<FaSearch className='text-gray-600 fill-current' />
					</button>
				</form>
			)}
		</Formik>
	)
}

export default Search

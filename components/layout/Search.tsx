import type { SearchConfig, SearchResults } from '../../interfaces/search'
import axios from 'axios'
import { Formik } from 'formik'
import { FaSearch } from 'react-icons/fa'

interface Props<SearchResult> {
	config: SearchConfig
	setSearchResults: (results: SearchResult[]) => void
}

const getResults = async <SearchResult,>({ url, body }) => {
	const req = {
		path: `${process.env.backend}/${url}`,
		body,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true',
		},
	}

	try {
		const res = await axios.post(req.path, req.body, {
			headers: req.headers,
		})

		return res.data as SearchResult[]
	} catch (err) {}
}

const Search = <SearchResult extends SearchResults>(
	props: Props<SearchResult>
) => {
	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting(true)
				const results = await getResults<SearchResult>({
					url: config.url,
					body: values,
				})
				updateResults(results)
				setSubmitting(false)
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
						placeholder={`Buscar`}
						onChange={handleChange}
						disabled={isSubmitting}
					/>
					<button
						type='submit'
						className='p-2 disabled:cursor-default disabled:opacity-50 mr-2'
						disabled={isSubmitting}
					>
						<FaSearch className='text-gray-600 fill-current' />
					</button>
				</form>
			)}
		</Formik>
	)
}

export default Search

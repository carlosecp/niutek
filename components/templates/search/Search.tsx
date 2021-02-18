import type { SearchConfig, SearchResults } from '../../../interfaces/search'
import axios from 'axios'
import { Formik } from 'formik'
import { FaSearch } from 'react-icons/fa'

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

interface Props<SearchResult> {
	config: SearchConfig
	updateResults: (results: SearchResult[]) => void
}

const Search = <SearchResult extends SearchResults>({
	config,
	updateResults,
}: Props<SearchResult>) => {
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
			{({
				values,
				isSubmitting,
				handleChange,
				handleBlur,
				handleSubmit,
			}) => (
				<form
					className='flex-1 h-full flex items-center'
					onSubmit={handleSubmit}
				>
					<button type='submit' className='p-2'>
						<FaSearch className='text-gray-600 fill-current' />
					</button>
					<input
						name='search'
						type='text'
						className='w-full border-none outline-none ring-0 focus:ring-0'
						placeholder={`Buscar`}
						onChange={handleChange}
					/>
				</form>
			)}
		</Formik>
	)
}

export default Search

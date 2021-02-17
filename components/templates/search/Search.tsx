import type { SearchConfig } from '../../../interfaces/search'
import axios from 'axios'
import { Formik } from 'formik'
import { FaSearch } from 'react-icons/fa'
import { Text } from '../forms/_fields'

interface SearchRequest<T> {
	url: string
	body: { search: string }
}

const getSearch = async <T,>({ url, body }: SearchRequest<T>) => {
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

		console.log(res.data)
		return res.data as T[]
	} catch (err) {
		return [] as T[]
	}
}

interface Props<T> {
	searchConfig: SearchConfig
	updateResults: (x: T[]) => void
}

// Componente en si
const Search = <T extends GlobalSearchResults>({
	searchConfig,
	updateResults,
}: Props<T>) => {
	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting(true)
				const results = await getSearch<T>({
					url: searchConfig.url,
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
				<form className='mx-auto' onSubmit={handleSubmit}>
					<div
						className={`w-full flex ${isSubmitting && 'disabled'}`}
					>
						<Text
							name='search'
							classes={{
								container: 'w-64',
								input: '',
							}}
							placeholder={searchConfig.labels.searchbox}
							value={values.search}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<button
							type='submit'
							className='w-12 flex-center bg-blue-500 rounded-r transition cursor-pointer text-white disabled:disabled outline-none'
							disabled={isSubmitting}
						>
							<FaSearch className={`transition text-current`} />
						</button>
					</div>
				</form>
			)}
		</Formik>
	)
}

export default Search

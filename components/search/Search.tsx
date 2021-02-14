import axios from 'axios'
import { SearchConfig, searchResults } from '../../interfaces'
import { Formik } from 'formik'
import { FaSearch } from 'react-icons/fa'
import { Text } from '../forms'

interface SearchRequest<T> {
	url: string
	body: { search: string }
}

const getSearch = async <T extends searchResults>({
	url,
	body,
}: SearchRequest<T>) => {
	const req = {
		path: `https://backend-dot-nicascriptproject.uc.r.appspot.com/${url}`,
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

		return res.data as T[]
	} catch (err) {}
}

interface Props<T> {
	searchConfig: SearchConfig
	updateResults: (x: T[]) => void
}

const Search = <T extends searchResults>({
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
				<form className='wrapper mx-auto' onSubmit={handleSubmit}>
					<div
						className={`w-full flex border-b border-gray-200 ${
							isSubmitting && 'disabled'
						}`}
					>
						<Text
							name='search'
							type='input'
							label={searchConfig.labels.searchbox}
							value={values.search}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<button
							type='submit'
							className={`w-12 flex-center transition
						${
							isSubmitting
								? 'cursor-wait disabled bg-transparent'
								: 'cursor-pointer text-gray-500'
						} outline-none`}
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

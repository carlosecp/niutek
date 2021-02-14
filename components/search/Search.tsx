import axios from 'axios'
import { SearchConfig, SearchPersonaNatural } from '../../interfaces'
import { Formik } from 'formik'
import { FaSearch } from 'react-icons/fa'
import { Text } from '../forms'

type Results = SearchPersonaNatural
interface SearchRequest<T> {
	url: string
	body: { search: string }
	updateSearch: (x: T[]) => void
}

const getSearch = async <T extends Results>({
	url,
	body,
	updateSearch,
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

		updateSearch(res.data as T[])
	} catch (err) {}
}

interface Props<T> {
	searchConfig: SearchConfig
	updateResults: (a: [T]) => void
}

const Search = <T extends Results>({
	searchConfig,
	updateResults,
}: Props<T>) => {
	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting(true)
				await getSearch<T>({
					url: searchConfig.url,
					body: values,
				})
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
				<form className='mx-auto flex' onSubmit={handleSubmit}>
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
						className={`w-12 flex-center
						${
							isSubmitting
								? 'cursor-wait text-gray-200'
								: 'cursor-pointer text-gray-500'
						} outline-none`}
						disabled={isSubmitting}
					>
						<FaSearch className={`transition text-current`} />
					</button>
				</form>
			)}
		</Formik>
	)
}

export default Search

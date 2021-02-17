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

const Search = <T,>({ searchConfig, updateResults }: Props<T>) => {
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
				<form
					className='mt-4 w-full mx-auto flex justify-center'
					onSubmit={handleSubmit}
				>
					<div className='w-full flex'>
						<button
							type='submit'
							className='px-4 bg-transparent text-gray-500 disabled:disabled'
							disabled={isSubmitting}
						>
							<FaSearch className={`transition text-current`} />
						</button>
						<Text
							name='search'
							classes={{
								container: 'w-full rounded-r-lg flex',
								input:
									'pr-2 flex-1 outline-none text-sm rounded-r-lg bg-transparent disabled:disabled',
							}}
							placeholder={searchConfig.labels.searchbox}
							value={values.search}
							onChange={handleChange}
							onBlur={handleBlur}
							disabled={isSubmitting}
						/>
					</div>
				</form>
			)}
		</Formik>
	)
}

export default Search

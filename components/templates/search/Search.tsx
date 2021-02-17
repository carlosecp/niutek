import type { SearchConfig } from '../../../interfaces/search'
import axios from 'axios'
import { Formik } from 'formik'
import { FaSearch } from 'react-icons/fa'
import { Text } from '../forms/_fields'

interface SearchRequest {
	url: string
	body: { search: string }
}

const getSearch = async <Response,>({ url, body }: SearchRequest) => {
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
		return res.data as Response[]
	} catch (err) {
		return [] as Response[]
	}
}

interface Props<Response> {
	searchConfig: SearchConfig
	updateResults: (x: Response[]) => void
}

const Search = <Response,>({
	searchConfig,
	updateResults,
}: Props<Response>) => {
	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting(true)
				const results = await getSearch<Response>({
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

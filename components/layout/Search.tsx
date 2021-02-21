import type { Dispatch } from 'react'
import type { GlobalSearchConfig, GlobalSearchResults } from '../../interfaces'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addAlert } from '../../store/alerts/actions'
import { Formik } from 'formik'
import { FaSearch } from 'react-icons/fa'

interface Args {
	url: string
	body: { search: string }
	dispatch: Dispatch<any>
}

const getResults = async <SearchResult extends GlobalSearchResults>({
	url,
	body,
	dispatch
}: Args) => {
	const req = {
		path: `${process.env.backend}/proc/${url}`,
		body,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		}
	}

	console.group(
		'%cSearching',
		'font-weight: bold; font-size: 16px; text-transform: uppercase; text-decoration: underline'
	)
	console.log(
		'%c config ',
		'background: #06B6D4; color: #FFFFFF; font-weight: bold',
		req
	)

	try {
		const res = await axios.post(req.path, req.body, {
			headers: req.headers
		})

		dispatch(
			addAlert({
				id: uuidv4(),
				message: `${res.data.success}`,
				type: 'success'
			})
		)

		console.log(
			'%c success ',
			'background: #149414; color: #FFFFFF; font-weight: bold',
			res.data
		)

		return res.data as SearchResult[]
	} catch (err) {
		dispatch(
			addAlert({
				id: uuidv4(),
				message: `${err.message}`,
				type: 'warning'
			})
		)

		console.log('%c error ', 'background: #c60022; color: #FFFFFF', err)
		return []
	} finally {
		console.groupEnd()
	}
}

interface Props<SearchResult> {
	config: GlobalSearchConfig
	setSearchResults: (results: SearchResult[]) => void
	loading: boolean
	setLoading: (x: boolean) => void
}

const Search = <SearchResult extends GlobalSearchResults>(
	props: Props<SearchResult>
) => {
	const dispatch = useDispatch()

	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting(true)
				props.setLoading(true)

				const results = await getResults<SearchResult>({
					url: props.config.url,
					body: values,
					dispatch
				})
				props.setSearchResults(results)

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
						placeholder={`Buscar`}
						onChange={handleChange}
						disabled={isSubmitting || props.loading}
					/>
					<button
						type='submit'
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

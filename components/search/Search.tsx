import * as React from 'react'
import axios from 'axios'
import { SearchType } from '../../interfaces/layout'
import { Formik, Form, Field, useFormikContext } from 'formik'
import { FaSearch } from 'react-icons/fa'
import { Text } from '../forms'

interface Props {
	searchConfig: SearchType
}

interface SearchRequest {
	url: string
	body: { search: string }
}

const getSearch = async ({ url, body }: SearchRequest) => {
	const req = {
		path: `https://backend-dot-nicascriptproject.uc.r.appspot.com/${url}`,
		body,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true',
		},
	}

	console.log('Req from components/search/Search.tsx: ', req)

	try {
		const res = await axios.post(req.path, req.body, {
			headers: req.headers,
		})

		console.log('Res from components/search/Search.tsx: ', res)
	} catch (err) {
		console.error('Error from components/search/Search.tsx: ', err)
	}
}

const Search = ({ searchConfig }: Props) => {
	const [value, setValue] = React.useState<boolean>(false)

	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true)
				getSearch({ url: searchConfig.url, body: values })
				setTimeout(() => {
					setSubmitting(false)
				}, 5000)
			}}
		>
			{({
				values,
				isSubmitting,
				handleChange,
				handleBlur,
				handleSubmit,
			}) => (
				<form className='max-w-md mx-auto flex' onSubmit={handleSubmit}>
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

import * as React from 'react'
import axios from 'axios'
import { SearchType } from '../../interfaces/layout'
import { Formik, Form, Field, useFormikContext } from 'formik'
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
	return (
		<Formik
			initialValues={{ search: '' }}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(true)
				getSearch({ url: searchConfig.url, body: values })
				setSubmitting(false)
			}}
		>
			<Form className='max-w-md mx-auto flex'>
				<Text
					name='search'
					type='input'
					label={searchConfig.labels.searchbox}
				/>
			</Form>
		</Formik>
	)
}

export default Search

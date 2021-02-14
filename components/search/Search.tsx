import * as React from 'react'
import axios from 'axios'
import { SearchType } from '../../interfaces/layout'
import { Formik, Form } from 'formik'
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
		path: `${process.env.BACKEND_URL}/${url}`,
		body,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true',
		},
	}

	console.log('From: search/Search.tsx', req)

	try {
		const res = await axios.post(req.path, req.body, {
			headers: req.headers,
		})
	} catch (err) {}
}

const Search = ({ searchConfig }: Props) => {
	return (
		<div className=''>
			<h1 className='mb-2 text-center font-semibold text-3xl'>
				{searchConfig.title}
			</h1>
			<Formik
				initialValues={{ search: '' }}
				onSubmit={(values) => {
					getSearch({ url: searchConfig.url, body: values })
				}}
			>
				<Form>
					<div className='max-w-md mx-auto flex'>
						<Text
							label={searchConfig.labels.searchbox}
							name='search'
						/>
					</div>
				</Form>
			</Formik>
		</div>
	)
}

export default Search

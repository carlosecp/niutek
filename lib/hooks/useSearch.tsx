import type { GlobalSearchConfig, GlobalSearchResults } from '../lib/interfaces'
import axios from 'axios'

interface Args {
	url: string
	body: { search: string }
}

const getResults = async <SearchResult extends GlobalSearchResults>({
	url,
	body
}: Args) => {
	const req = {
		path: `${process.env.backend}/proc/${url}`,
		body,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		}
	}

	try {
		const res = await axios.post(req.path, req.body, {
			headers: req.headers
		})

		return res.data as SearchResult[]
	} catch (err) {
		console.log('%c error ', 'background: #c60022; color: #FFFFFF', err)
		return []
	} finally {
		console.groupEnd()
	}
}

export default getResults

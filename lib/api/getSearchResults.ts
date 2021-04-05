import axios from 'axios'

interface SearchConfig {
	endpoint: string
	debug: boolean
	body: { search: string }
}

const getSearchResults = async <SearchResult>(config: SearchConfig) => {
	const req = {
		path: `${process.env.backend}/${config.debug ? 'debug' : 'proc'}/busca/${
			config.endpoint
		}`,
		body: config.body,
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
		return [] as SearchResult[]
	}
}

export default getSearchResults

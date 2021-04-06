import axios from 'axios'
import { log } from '../Debug'

interface SearchConfig {
	endpoint: string
	debug: boolean
	body: { search: string }
}

const getSearchResults = async <SearchResult>(config: SearchConfig) => {
	const req = {
		endpoint: `${process.env.BACKEND_URL}/${
			config.debug ? 'debug' : 'proc'
		}/busca/${config.endpoint}`,
		body: config.body,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		}
	}

	log.open('Search', 'lib/api/getSearchResults')
	log.request(req)

	try {
		const res = await axios.post(req.endpoint, req.body, {
			headers: req.headers
		})

		log.response(res)
		return res.data as SearchResult[]
	} catch (err) {
		log.error(err)
		return [] as SearchResult[]
	} finally {
		log.close()
	}
}

export default getSearchResults

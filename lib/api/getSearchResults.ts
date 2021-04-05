import axios from 'axios'

interface Args {
	endpoint: string
	debug: boolean
	body: { search: string }
}

const getSearchResults = async <SearchResult>(args: Args) => {
	const req = {
		path: `${process.env.backend}/${args.debug ? 'debug' : 'proc'}/busca/${
			args.endpoint
		}`,
		body: args.body,
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

import axios from 'axios'

interface Args {
	endpoint: string
	body: { search: string }
}

const getSearchResults = async <SearchResult>(props: Args) => {
	const req = {
		path: `${process.env.backend}/proc/busca/${props.endpoint}`,
		body: props.body,
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

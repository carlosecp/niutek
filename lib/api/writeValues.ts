import axios from 'axios'

interface RequestConfig<Values> {
	endpoint: string
	requestBody: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
}

const writeValues = async <Values>(config: RequestConfig<Values>) => {
	const req = {
		endpoint: `${process.env.backend}/proc/${config.endpoint}`,
		body: config.requestBody,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true',
			...config?.extraHeaders
		}
	}

	try {
		const res = await axios.post(req.endpoint, req.body, {
			headers: req.headers
		})

		console.log(res)
	} catch (err) {
		console.error(err)
	}
}

export default writeValues

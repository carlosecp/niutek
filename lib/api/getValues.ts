import axios from 'axios'
import { log } from '../Debug'

interface RequestConfig<Values> {
	debug: boolean
	endpoint: string
	body: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
	fallbackValues: Values
}

const getValues = async <Values>(config: RequestConfig<Values>) => {
	const req = {
		endpoint: `${process.env.BACKEND_URL}/${
			config.debug ? 'debug' : 'proc'
		}/lee/${config.endpoint}`,
		body: config.body,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true',
			...config?.extraHeaders
		}
	}

	log.open('Read', 'lib/api/getValues')
	log.request(req)

	try {
		const res = await axios.post(req.endpoint, req.body, {
			headers: req.headers
		})

		log.response(res)
		return res.data as Values
	} catch (err) {
		log.error(err)
		return config.fallbackValues
	} finally {
		log.close()
	}
}

export default getValues

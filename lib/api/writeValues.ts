import axios from 'axios'
import { log } from '../Debug'

interface RequestConfig<Values> {
	debug: boolean
	endpoint: string
	body: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
	type: 'registra' | 'modifica'
}

const writeValues = async <Values>(config: RequestConfig<Values>) => {
	const req = {
		endpoint: `${process.env.BACKEND_URL}/${config.debug ? 'debug' : 'proc'}/${
			config.type
		}/${config.endpoint}`,
		body: config.body,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': true,
			...config?.extraHeaders
		}
	}

	log.open('Write', 'lib/api/writeValues')
	log.request(req)

	try {
		const res = await axios.post(req.endpoint, req.body, {
			headers: req.headers
		})

		log.response(res)
		return { type: 'success', msg: 'Operación exitosa' }
	} catch (err) {
		log.error(err)
		return { type: 'error', msg: 'Ha habido un error' }
	} finally {
		log.close()
	}
}

export default writeValues

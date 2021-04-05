import axios from 'axios'

interface RequestConfig<Values> {
	debug: boolean
	endpoint: string
	body: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
	type: 'registra' | 'modifica'
}

const writeValues = async <Values>(config: RequestConfig<Values>) => {
	const req = {
		endpoint: `${process.env.backend}/${config.debug ? 'debug' : 'proc'}/${
			config.type
		}/${config.endpoint}`,
		body: config.body,
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

		return { type: 'success', msg: 'Operación exitosa' }
	} catch (err) {
		return { type: 'error', msg: 'Ha habido un error' }
	}
}

export default writeValues

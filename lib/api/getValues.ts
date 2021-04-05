import axios from 'axios'

interface RequestConfig<Values> {
	extraKeys: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
	fallbackValues: Values
}

const getValues = async <Values>(config: RequestConfig<Values>) => {
	const req = {
		endpoint: `${process.env.backend}/proc/lee/datos_cliente_natural`,
		body: config.extraKeys,
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

		return res.data as Values
	} catch (err) {
		return config.fallbackValues
	}
}

export default getValues

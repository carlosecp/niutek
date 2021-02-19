import { useState } from 'react'
import axios from 'axios'

interface ReqConfig {
	url: string
	body: { [x: string]: any }
}

const getRequest = async <Response,>(config: ReqConfig) => {
	const [data, setData] = useState<Response>()
	const [loading, setLoading] = useState(false)

	const req = {
		path: `${process.env.backend}/${config.url}`,
		body: config.body,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true',
		},
	}

	try {
		const res = await axios.post(req.path, req.body, {
			headers: req.headers,
		})
		setData(res.data)
	} catch (err) {
		console.error('useRequest: ', err)
	} finally {
		return {
			data: data as Response,
			loading,
		}
	}
}

export default getRequest

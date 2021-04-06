import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import NextCors from 'nextjs-cors'

interface RequestConfig<Values> {
	debug: boolean
	endpoint: string
	body: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
	fallbackValues: Values
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	await NextCors(req, res, {
		methods: ['POST'],
		origin: '*',
		optionsSuccessStatus: 200
	})

	try {
		const APIres = await axios.post(req.body.endpoint, req.body.body, {
			headers: req.body.headers
		})

		res.json(APIres.data)
	} catch (err) {
		console.error(err)
		res.status(err.status || 500).json(err)
	}
}

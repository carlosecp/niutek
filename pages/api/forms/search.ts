import type { NextApiRequest, NextApiResponse } from 'next'
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
import axios from 'axios'
import NextCors from 'nextjs-cors'

export default withApiAuthRequired(
	async (req: NextApiRequest, res: NextApiResponse) => {
		await NextCors(req, res, {
			methods: ['POST'],
			origin: '*',
			optionsSuccessStatus: 200
		})

		const { accessToken } = await getAccessToken(req, res)

		const config = {
			endpoint: `${process.env.BACKEND_URL}/${req.body.endpoint}`,
			body: req.body.body,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true',
				'x-auth-token': accessToken,
				...req.body?.headers
			}
		}

		try {
			const APIres = await axios.post(config.endpoint, config.body, {
				headers: config.headers
			})

			res.json(APIres.data)
		} catch (err) {
			console.error(err)
			res.status(err.status || 500).json(err)
		}
	}
)

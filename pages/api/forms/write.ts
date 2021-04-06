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
)

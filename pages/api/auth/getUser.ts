import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from '@auth0/nextjs-auth0'
import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const config = {
		url: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/auth0|606cb60f05abfa00692d5389`,
		headers: { authorization: `Bearer ${process.env.AUTH0_MGMT_API_TOKEN}` }
	}

	try {
		const APIres = await axios.get(config.url, {
			headers: config.headers
		})
		res.status(200).json(APIres.data)
	} catch (err) {
		console.error(err)
		res.status(err.status || 404).json(err)
	}
}

import type { NextApiRequest, NextApiResponse } from 'next'
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'

const getJWT = async (req: NextApiRequest, res: NextApiResponse) => {
	const { accessToken } = await getAccessToken(req, res)
	return accessToken
}

export default getJWT

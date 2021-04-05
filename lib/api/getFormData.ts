import axios from 'axios'

interface Args<Data> {
	body: { [x: string]: any }
	debug: boolean
	endpoint: string
	setData: (x: Data) => void
}

const getFormData = async <Data>(args: Args<Data>) => {
	const path = `${process.env.backend}/${args.debug ? 'debug' : 'proc'}/lee/${
		args.endpoint
	}`

	const req = {
		path,
		body: args.body,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Credentials': 'true'
		}
	}

	try {
		const res = await axios.post(req.path, req.body, {
			headers: req.headers
		})

		args.setData(res.data)
	} catch (err) {
		console.error(err)
	}
}

export default getFormData

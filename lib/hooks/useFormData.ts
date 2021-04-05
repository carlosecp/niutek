import * as React from 'react'
import getData from '../utils/getData'

interface Args<Data> {
	dataSchema: Data
	debug: boolean
	endpoints: {
		read: string
		write: string
	}
	bodies: {
		read: { [x: string]: any }
		write: { [x: string]: any }
	}
	setLoading: (x: boolean) => boolean
}

const useFormData = <Data>(args: Args<Data>) => {
	const [data, setData] = React.useState(args.dataSchema)
	const [alerts, setAlerts] = React.useState<string | number | null>()

	const get = async () => {
		args.setLoading(true)

		await getData<Data>({
			body: args.bodies.read,
			debug: args.debug,
			endpoint: args.endpoints.read,
			setData
		})

		args.setLoading(false)
	}

	return { data }
}

export default useFormData

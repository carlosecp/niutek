import axios from 'axios'
import * as React from 'react'

interface Args {
	errors: any
}

const LogErrors = ({ errors }: Args) => {
	React.useEffect(() => {
		console.groupCollapsed(
			'%c validations ',
			'background: #c60022; color: #FFFFFF'
		)
		console.log('errors: ', errors)
		console.groupEnd()
	}, [errors])

	return <div></div>
}

interface RequestLog {
	endpoint: string
	body: { [x: string]: any }
	headers: { [x: string]: any }
}

interface ResponseLog {
	data: { [x: string]: any }
	[x: string]: any
}

const log = {
	open: (title: string, filePath: string) => {
		console.groupEnd()
		console.group(
			`%c${title}`,
			'font-weight: bold; font-size: 16px; text-transform: uppercase; text-decoration: underline'
		)
		console.log(`File: ${filePath}`)
	},
	request: (request: RequestLog) => {
		console.log(
			'%c config ',
			'background: #3666F1; color: #FFFFFF; font-weight: bold',
			{ ...request, endpoint: request.endpoint }
		)
	},
	response: (response: ResponseLog) => {
		console.log(
			'%c response ',
			'background: #149414; color: #FFFFFF; font-weight: bold',
			response.data
		)
	},
	error: (error: any) => {
		console.error(
			'%c error ',
			'background: #c60022; color: #FFFFFF; font-weight: bold',
			error
		)
	},
	close: () => {
		console.groupEnd()
	},
	procedures: async () => {
		await axios.post(`${process.env.BACKEND_URL}/proc/list`)
	}
}

export { LogErrors, log }

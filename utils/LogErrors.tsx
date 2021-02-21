import * as React from 'react'

interface Args {
	errors: any
}

const LogErrors = ({ errors }: Args) => {
	React.useEffect(() => {
		console.groupCollapsed(
			'%c validation errors ',
			'background: #c60022; color: #FFFFFF'
		)
		console.log('errors: ', errors)
		console.groupEnd()
	}, [errors])

	return <div></div>
}

export default LogErrors

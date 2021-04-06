import * as React from 'react'
import axios from 'axios'
import authContext from '@/context/auth/authContext'
import { log } from '../Debug'
interface Args<Values> {
	initialValues: Values
	debug?: {
		read?: boolean
		write?: boolean
	}
	endpoints: {
		read: string
		write: string
	}
}

interface GetConfig {
	extraKeys?: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
}

interface WriteConfig {
	extraKeys?: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
}

interface DefaultProps<Validations> {
	validations: Validations
	navLinks: { name: string; anchor: string }[]
	navbarTitle: string
}

const useForm = <Values,>(args: Args<Values>) => {
	const [values, setValues] = React.useState(args.initialValues)
	const [loading, setLoading] = React.useState(false)
	const [editing, setEditing] = React.useState(false)

	const auth = React.useContext(authContext)

	const getValues = async (config?: GetConfig) => {
		setLoading(true)

		const req = {
			endpoint: `${process.env.BACKEND_URL}/${
				args.debug?.read ? 'debug' : 'proc'
			}/lee/${args.endpoints.read}`,
			body: {
				p_cod_empresa: auth.user.p_cod_empresa,
				p_cod_sucursal: auth.user.p_cod_sucursal,
				...config?.extraKeys
			},
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': 'true',
				...config?.extraHeaders
			}
		}

		log.open('Read', 'useForm')
		log.request(req)

		try {
			const res = await axios.post<Values>('/api/forms/get', req)

			log.response(res)
			setValues(res.data)
		} catch (err) {
			log.error(err)
		} finally {
			log.close()
			setLoading(false)
		}
	}

	const writeValues = async (data = values, config?: WriteConfig) => {
		setLoading(true)

		const req = {
			endpoint: `${process.env.BACKEND_URL}/${
				args.debug?.write ? 'debug' : 'proc'
			}/${editing ? 'modifica' : 'registra'}/${args.endpoints.write}`,
			body: {
				p_cod_empresa: 1,
				p_cod_sucursal: 0,
				data,
				...config?.extraKeys
			},
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': true,
				...config?.extraHeaders
			}
		}

		log.open('Read', 'useForm')
		log.request(req)

		try {
			const res = await axios.post<Values>('/api/forms/write', req)

			log.response(res)
			setValues(res.data)
		} catch (err) {
			log.error(err)
		} finally {
			log.close()
			setLoading(false)
		}
	}

	const reset = () => setValues(args.initialValues)

	const getDefaultProps = <Validations,>(
		defaultProps: DefaultProps<Validations>
	) => ({
		form: {
			values,
			validations: defaultProps.validations,
			writeData: (values: Values) => {
				writeValues(values)
			}
		},
		navigation: {
			navLinks: defaultProps.navLinks
		},
		navbar: {
			title: defaultProps.navbarTitle,
			loading,
			onReset: reset,
			setEditingExisting: setEditing
		}
	})

	const state = {
		values,
		loading,
		editing,
		getValues,
		writeValues,
		reset,
		setLoading,
		setEditing,
		getDefaultProps
	}

	React.useDebugValue({
		values,
		loading,
		editing
	})

	return state
}

export default useForm

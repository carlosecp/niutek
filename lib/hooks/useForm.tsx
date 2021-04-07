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
	addAlert: (msg: string, type: 'success' | 'warning') => void
}

interface GetConfig {
	extraKeys?: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
}

interface WriteConfig {
	extraKeys?: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
}

interface DefaultProps<Values, Validations> {
	validations: Validations
	navLinks: { name: string; anchor: string }[]
	navbarTitle: string
	writeValues: (values: Values) => void
}

const useForm = <Values,>(args: Args<Values>) => {
	const [values, setValues] = React.useState(args.initialValues)
	const [loading, setLoading] = React.useState(false)
	const [currentId, setCurrentId] = React.useState<string | number>('')
	const [editing, setEditing] = React.useState(false)

	const auth = React.useContext(authContext)

	const getValues = async (accessor: string | number, config?: GetConfig) => {
		setLoading(true)

		const req = {
			endpoint: `${args.debug?.read ? 'debug' : 'proc'}/lee/${
				args.endpoints.read
			}`,
			body: {
				p_cod_empresa: auth.user.p_cod_empresa,
				p_cod_sucursal: auth.user.p_cod_sucursal,
				...config?.extraKeys
			},
			headers: {
				...config?.extraHeaders
			}
		}

		log.open('Read', 'useForm')
		log.request(req)

		try {
			const res = await axios.post<Values>('/api/forms/get', req)

			log.response(res)
			args.addAlert('Success', 'success')
			setValues(res.data)
			setCurrentId(accessor)
		} catch (err) {
			log.error(err)
			args.addAlert('Error', 'warning')
		} finally {
			log.close()
			setLoading(false)
		}
	}

	const writeValues = async (data = values, config?: WriteConfig) => {
		setLoading(true)

		const req = {
			endpoint: `${args.debug?.write ? 'debug' : 'proc'}/${
				editing ? 'modifica' : 'registra'
			}/${args.endpoints.write}`,
			body: {
				p_cod_empresa: auth.user.p_cod_empresa,
				p_cod_sucursal: auth.user.p_cod_sucursal,
				...data,
				...config?.extraKeys
			},
			headers: {
				...config?.extraHeaders
			}
		}

		log.open('Write', 'useForm')
		log.request(req)

		try {
			const res = await axios.post<Values>('/api/forms/write', req)

			log.response(res)
		} catch (err) {
			log.error(err)
		} finally {
			log.close()
			setLoading(false)
		}
	}

	const reset = () => setValues(args.initialValues)

	const getDefaultProps = <Values, Validations>(
		defaultProps: DefaultProps<Values, Validations>
	) => ({
		form: {
			values,
			validations: defaultProps.validations,
			writeValues: defaultProps.writeValues
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
		currentId,
		editing,
		getValues,
		writeValues,
		reset,
		setCurrentId,
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

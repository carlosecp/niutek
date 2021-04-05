import * as React from 'react'
import getFormValues from '@/lib/api/getValues'
import writeFormValues from '@/lib/api/writeValues'
interface Args<Values> {
	initialValues: Values
	debug: {
		read: boolean
		write: boolean
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

const useForm = <Values,>(args: Args<Values>) => {
	const [values, setValues] = React.useState(args.initialValues)
	const [loading, setLoading] = React.useState(false)
	const [current, setCurrent] = React.useState(false)
	const [editing, setEditing] = React.useState(false)

	const getValues = async (config?: GetConfig) => {
		setLoading(true)
		const data = await getFormValues<Values>({
			endpoint: args.endpoints.read,
			body: {
				p_cod_empresa: 1,
				p_cod_sucursal: 0,
				...config?.extraKeys
			},
			debug: args.debug.read || false,
			fallbackValues: args.initialValues
		})

		setValues(data)
		setLoading(false)
	}

	const writeValues = async (data = values, config?: WriteConfig) => {
		setLoading(true)
		const res = await writeFormValues<Values>({
			endpoint: args.endpoints.write,
			body: {
				p_cod_empresa: 1,
				p_cod_sucursal: 0,
				data,
				...config?.extraKeys
			},
			debug: args.debug.write || false,
			type: editing ? 'modifica' : 'registra'
		})

		reset()
		setLoading(false)
	}

	const reset = () => setValues(args.initialValues)

	return {
		values,
		loading,
		current,
		editing,
		getValues,
		writeValues,
		reset,
		setLoading,
		setCurrent,
		setEditing
	}
}

export default useForm
import * as React from 'react'
import getFormValues from '@/lib/api/getValues'
import writeFormValues from '@/lib/api/writeValues'
interface Args<Values> {
	initialValues: Values
}

interface GetConfig {
	requestBody: { [x: string]: any }
	extraHeaders?: { [x: string]: any }
}

const useForm = <Values,>(args: Args<Values>) => {
	const [values, setValues] = React.useState(args.initialValues)
	const [loading, setLoading] = React.useState(false)
	const [current, setCurrent] = React.useState<string | number | null>(null)

	const getValues = async (config: GetConfig) => {
		const data = await getFormValues<Values>({
			...config,
			fallbackValues: args.initialValues
		})

		setValues(data)
	}

	const writeValues = async (
		data = values,
		extraKeys?: { [x: string]: any }
	) => {
		const endpoint = 'registra/cliente_natural'

		await writeFormValues<Values>({
			requestBody: { ...extraKeys, ...data },
			endpoint
		})
	}

	const reset = () => setValues(args.initialValues)

	return {
		values,
		getValues,
		writeValues,
		loading,
		setLoading,
		current,
		setCurrent,
		reset
	}
}

export default useForm

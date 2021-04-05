import * as React from 'react'
import axios from 'axios'

interface Args<Values> {
	initialValues: Values
}

const useForm = <Values,>(args: Args<Values>) => {
	const [values, setValues] = React.useState(args.initialValues)

	return { values }
}

export default useForm

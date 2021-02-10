import { useState, useEffect, useDebugValue } from 'react'
import axios from 'axios'
import requestConfig from '../utils/requestConfig'

const useDropdownOptions = (keys, req, getDeptos = false) => {
	const [loading, setLoading] = useState(true)
	const [options, setOptions] = useState(keys)

	const { endpoint, body } = req

	const getOptions = async () => {
		const res = await axios.post(
			`${process.env.REACT_APP_URL}/${endpoint}`,
			body,
			requestConfig
		)

		const indexedKeys = Object.keys(keys)
		const data = {}

		res.data.forEach((dropdown, index) => {
			data[indexedKeys[index]] = dropdown
		})

		// Esto es lo de si queremos traer los departamentos.
		if (getDeptos) {
			const deptos = await axios.post(
				`${process.env.REACT_APP_URL}/read/dep`,
				{ codigo: 0 },
				requestConfig
			)
			setOptions({ deptos: deptos.data, ...data })
		} else {
			setOptions(data)
		}

		console.log(res.data)
		setLoading(false)
	}

	useEffect(() => {
		getOptions()
		// eslint-disable-next-line
	}, [])

	useDebugValue({
		options,
		loading,
	})

	return {
		loading,
		options,
	}
}

export default useDropdownOptions

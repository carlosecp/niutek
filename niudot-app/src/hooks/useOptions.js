import { useState, useEffect, useDebugValue } from 'react'
import axios from 'axios'
import requestConfig from '../utils/requestConfig'

const useDropdownOptions = (optionsReqConfig, optionsFormat) => {
	const [options, setOptions] = useState([])
	const [loading, setLoading] = useState(true)

	const getOptions = async () => {
		setLoading(true)

		const res = await axios.post(
			`${process.env.REACT_APP_URL}/read`,
			optionsReqConfig,
			requestConfig
		)

		const data = {}

		res.data.forEach((table, index) => {
			if (!Array.isArray(optionsFormat[index])) {
				data[optionsFormat[index]] = table
			} else if (Array.isArray(optionsFormat[index])) {
				table.forEach((subTable, subIndex) => {
					data[optionsFormat[index][subIndex]] = subTable
				})
			}
		})

		setOptions(data)
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

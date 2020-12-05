import React, { useEffect, useContext } from 'react'
import { useField } from 'formik'
import alertsContext from '../../../../context/alerts/alerts/alertsContext'

function TextInput({ type, placeholder, ...props }) {
	const [field, meta] = useField(props)
	const { addAlert } = useContext(alertsContext)

	useEffect(() => {
		if (meta.error) {
			addAlert(meta.error)
		}
	}, [meta.error])

	return (
		<input
			type={type}
			className='tw-form-field w-full'
			placeholder={placeholder}
			{...field}
			{...props}
		/>
	)
}

export default TextInput

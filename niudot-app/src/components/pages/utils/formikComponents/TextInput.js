import React, { useEffect, useContext } from 'react'
import { useField } from 'formik'
import alertsContext from '../../../../context/alerts/alerts/alertsContext'

function TextInput({ type, placeholder, ...props }) {
	const [field, meta] = useField(props)
	const { addAlert } = useContext(alertsContext)

	useEffect(() => {
		if (meta.touched && meta.error) {
			addAlert(meta.error)
			console.log(meta.error)
		}
		// eslint-disable-next-line
	}, [meta.touched, meta.error])

	return (
		<>
			<input
				type={type}
				className={`form-field w-full ${
					meta.touched && meta.error && 'form-field-error'
				}`}
				placeholder={placeholder}
				{...field}
				{...props}
			/>
		</>
	)
}

export default TextInput

import React, { useEffect, useContext } from 'react'
import { useField } from 'formik'
import alertsContext from '../../../../context/alerts/alerts/alertsContext'

function TextArea({ type, placeholder, ...props }) {
	const [field, meta] = useField(props)
	const { addAlert } = useContext(alertsContext)

	useEffect(() => {
		if (meta.touched && meta.error) {
			addAlert(meta.error)
		}
	}, [meta.touched, meta.error])

	return (
		<textarea
			type={type}
			className={`w-full text-sm h-48 p-2 rounded outline-none 
            border-2 border-solid text-black bg-white border-gray-200 focus:bg-gray-100 focus:border-gray-cstm-14
            dark:text-gray-cstm-14 dark:bg-gray-cstm-1 dark:border-gray-cstm-2 placeholder-gray-cstm-10
            dark:focus:bg-gray-cstm-2 dark:focus:border-blue-500
            ${meta.touched && meta.error && 'form-field-error'}`}
			placeholder={placeholder}
			{...field}
			{...props}
		/>
	)
}

export default TextArea

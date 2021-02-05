import React, { useEffect } from 'react'

import { useField } from 'formik'

const TextInput = ({
	disabled,
	type,
	placeholder,
	handleValueChange,
	...props
}) => {
	const [field, meta] = useField(props)

	useEffect(() => {
		if (disabled) {
			field.value = ''
		}
	}, [disabled])

	return (
		<>
			{!disabled ? (
				<input
					type={type}
					className={`form-field w-full ${
						meta.touched && meta.error && 'form-field-error'
					}`}
					placeholder={placeholder}
					{...field}
					{...props}
				/>
			) : (
				<input
					type={type}
					className={`form-field-disabled w-full ${
						meta.touched && meta.error && 'form-field-error'
					}`}
					placeholder={placeholder}
					{...field}
					{...props}
					disabled
				/>
			)}
			{meta.touched && meta.error && (
				<small className='font-bold text-red-500'>{meta.error}</small>
			)}
		</>
	)
}

export default TextInput

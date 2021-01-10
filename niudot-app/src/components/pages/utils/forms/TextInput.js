// React and Router Stuff
import React from 'react'
// Extra libraries
import { useField } from 'formik'

const TextInput = ({ disabled, type, placeholder, ...props }) => {
	const [field, meta] = useField(props)

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

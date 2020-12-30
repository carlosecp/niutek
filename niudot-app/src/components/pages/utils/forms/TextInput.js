// React and Router Stuff
import React from 'react'
// Extra libraries
import { useField } from 'formik'

const TextInput = ({ type, placeholder, ...props }) => {
	const [field, meta] = useField(props)

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
			{meta.touched && meta.error && (
				<small className='font-bold text-red-500'>{meta.error}</small>
			)}
		</>
	)
}

export default TextInput

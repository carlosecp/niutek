import React from 'react'
import { useField } from 'formik'

function TextInput({ type, placeholder, ...props }) {
	const [field] = useField(props)

	return (
		<input
			type={type}
			className='tw-form-field w-full'
			placeholder={placeholder}
			{...field}
			{...props}
			required
		/>
	)
}

export default TextInput

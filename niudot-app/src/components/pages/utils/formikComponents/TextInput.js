import React from 'react'
import { useField } from 'formik'

function TextInput({ type, placeholder, ...props }) {
	const [field] = useField(props)

	return (
		<>
			<input
				type={type}
				className='std-input rounded'
				placeholder={placeholder}
				{...field}
				{...props}
				required
			/>
		</>
	)
}

export default TextInput

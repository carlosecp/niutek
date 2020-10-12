import React from 'react'
import { useField } from 'formik'

function TextInput({ type, placeholder, ...props }) {
	const [field, meta] = useField(props)

	return (
		<>
			<input
				type={type}
				className={`std-input rounded ${
					meta.touched && meta.error && 'input-error'
				}`}
				placeholder={placeholder}
				{...field}
				required
			/>
			{
				<span className='error'>
					{meta.touched && meta.error && meta.error}
				</span>
			}
		</>
	)
}

export default TextInput

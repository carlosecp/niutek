import React from 'react'
import { useField, Field } from 'formik'

function TextInput({ ...props }) {
	const [field] = useField(props)

	return <input className='std-input rounded' {...field} {...props} />
}

function CheckboxInput({ ...props }) {
	return (
		<div className='std-input rounded'>
			<Field name='cargoPublico' type='checkbox' />
			<div className='input-checkbox-content'>{props.label}</div>
		</div>
	)
}

export { TextInput, CheckboxInput }

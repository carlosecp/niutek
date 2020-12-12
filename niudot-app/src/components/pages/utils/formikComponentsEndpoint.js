import React from 'react'
import { useField } from 'formik'
import TextInput from './formikComponents/TextInput'
import CheckboxInput from './formikComponents/CheckboxInput'
import TextArea from './formikComponents/TextArea'

function FormTextInput({
	size,
	name,
	label = 'Label',
	showLabel = true,
	placeholder,
	type = 'text',
	newLine = false,
	...props
}) {
	return (
		<div className={`form-container-${newLine ? `${size}-nl` : size}`}>
			{showLabel && (
				<label className='text-black-white' htmlFor={name}>
					{label}
				</label>
			)}
			<TextInput name={name} type={type} placeholder={placeholder} {...props} />
		</div>
	)
}

function FormTextArea({
	size,
	name,
	label = 'Label',
	showLabel = true,
	placeholder,
	type = 'text',
	newLine = false,
	...props
}) {
	return (
		<div className={`form-container-${newLine ? `${size}-nl` : size}`}>
			{showLabel && (
				<label className='text-black-white' htmlFor={name}>
					{label}
				</label>
			)}
			<TextArea name={name} type={type} placeholder={placeholder} {...props} />
		</div>
	)
}


function FormCheckboxInput({
	size,
	label = '',
	name,
	description,
	newLine = false,
}) {
	return (
		<div className={`form-container-${newLine ? `${size}-nl` : size} flex`}>
			<CheckboxInput name={name} label={label} description={description} />
		</div>
	)
}

function FormDropdownInput({ value, handleChange, size, label, newLine = false, ...props }) {
	const [field] = useField(props)
	
	return (
		<div className={`form-container-${newLine ? `${size}-nl` : size}`}>
			<label className='text-black-white'>{label}</label>
			<div className=''>
				<select onChange={handleChange} value={value} className='form-field w-full' {...field} {...props} />
			</div>
		</div>
	)
}

export { FormTextInput, FormCheckboxInput, FormDropdownInput, FormTextArea }

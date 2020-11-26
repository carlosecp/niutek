import React from 'react'
import { useField } from 'formik'
import { FaChevronDown } from 'react-icons/fa'

import TextInput from './formikComponents/TextInput'
import CheckboxInput from './formikComponents/CheckboxInput'

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
		<div className={`tw-ff-${size} ${newLine && `tw-ff-${size}-nl`}`}>
			{showLabel && (
				<label className='tw-text-label' htmlFor={name}>
					{label}
				</label>
			)}
			<TextInput name={name} type={type} placeholder={placeholder} {...props} />
		</div>
	)
}

function FormCheckboxInput({
	size,
	label,
	showLabel = true,
	name,
	title,
	newLine = false
}) {
	return (
		<div className={`tw-ff-${size} ${newLine && `tw-ff-${size}-nl`}`}>
			{showLabel && (
				<label className='tw-text-label' htmlFor={name}>
					{label}
				</label>
			)}
			<CheckboxInput name={name} label={label} title={title} />
		</div>
	)
}

function FormDropdownInput({ size, label, newLine = true, ...props }) {
	const [field] = useField(props)

	return (
		<div className={`tw-ff-${size} ${newLine && `tw-ff-${size}-nl`}`}>
			<label className='tw-text-label'>{label}</label>
			<div className=''>
				<select className='w-full tw-form-field' {...field} {...props} />
			</div>
		</div>
	)
}

export { FormTextInput, FormCheckboxInput, FormDropdownInput }
